/* 中文标注：全站雾蓝星空背景组件，负责深色模式星星、流星、浅色模式柔和渐变。 */
import { Box, useColorMode } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  r: number;
  a: number;
  s: number;
}

// 中文标注：随机生成一颗星星的位置、大小、透明度变化速度。
function createStar(width: number, height: number): Star {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    r: Math.random() * 1.7 + 0.45,
    a: Math.random() * Math.PI * 2,
    s: Math.random() * 0.018 + 0.006,
  };
}

// 中文标注：背景组件本身不参与点击，只作为固定背景层存在。
export default function EasonBackground() {
  const { colorMode } = useColorMode();
  const isLight = colorMode === "light";
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const meteorLayerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let stars: Star[] = [];
    let animationFrameId = 0;
    let isMounted = true;

    // 中文标注：窗口尺寸变化时重新设置 Canvas 尺寸，避免背景滚动后才刷新。
    const resize = () => {
      const previousWidth = canvas.clientWidth || window.innerWidth;
      const previousHeight = canvas.clientHeight || window.innerHeight;
      const width = window.innerWidth;
      const height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const target = isLight ? 0 : Math.min(160, Math.max(72, Math.floor((width * height) / 11500)));
      stars = stars.length
        ? stars.slice(0, target).map((star) => ({
            ...star,
            x: (star.x / previousWidth) * width,
            y: (star.y / previousHeight) * height,
          }))
        : [];

      while (stars.length < target) stars.push(createStar(width, height));
    };

    // 中文标注：每一帧重绘渐变背景和星星闪烁动画。
    const draw = () => {
      if (!isMounted) return;

      const width = window.innerWidth;
      const height = window.innerHeight;
      ctx.clearRect(0, 0, width, height);
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      if (isLight) {
        gradient.addColorStop(0, "rgba(247, 251, 253, 1)");
        gradient.addColorStop(0.5, "rgba(235, 244, 249, 1)");
        gradient.addColorStop(1, "rgba(221, 236, 244, 1)");
      } else {
        gradient.addColorStop(0, "rgba(4, 9, 18, 0.98)");
        gradient.addColorStop(0.52, "rgba(9, 16, 24, 0.96)");
        gradient.addColorStop(1, "rgba(23, 35, 44, 0.94)");
      }
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      if (!isLight) {
        stars.forEach((star) => {
          star.a += star.s;
          const alpha = 0.25 + Math.abs(Math.sin(star.a)) * 0.75;
          ctx.beginPath();
          ctx.fillStyle = `rgba(159, 185, 201, ${alpha})`;
          ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
          ctx.fill();
          star.y += 0.05;
          if (star.y > height) {
            star.y = 0;
            star.x = Math.random() * width;
          }
        });
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      isMounted = false;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, [isLight]);

  useEffect(() => {
    const layer = meteorLayerRef.current;
    if (!layer) return;

    layer.innerHTML = "";
    if (isLight) return;

    const createMeteor = () => {
      const meteor = document.createElement("span");
      meteor.className = "eason-meteor";
      meteor.style.left = `${55 + Math.random() * 50}vw`;
      meteor.style.top = `${5 + Math.random() * 48}vh`;
      meteor.style.animationDuration = `${1.8 + Math.random() * 1.4}s`;
      layer.appendChild(meteor);
      requestAnimationFrame(() => meteor.classList.add("fly"));
      window.setTimeout(() => meteor.remove(), 3800);
    };

    const intervalId = window.setInterval(createMeteor, 5200);
    const firstTimer = window.setTimeout(createMeteor, 900);

    return () => {
      window.clearInterval(intervalId);
      window.clearTimeout(firstTimer);
      layer.innerHTML = "";
    };
  }, [isLight]);

  return (
    <Box
      aria-hidden="true"
      position="fixed"
      inset={0}
      zIndex={0}
      pointerEvents="none"
      overflow="hidden"
      sx={{
        "@keyframes easonFloatMist": {
          "50%": { transform: "translate(3vw, -2vh) scale(1.05)" },
        },
        "@keyframes easonMeteorFly": {
          "0%": { opacity: 0, transform: "translate3d(0, 0, 0) rotate(-28deg)" },
          "12%": { opacity: 0.9 },
          "100%": { opacity: 0, transform: "translate3d(-42vw, 42vh, 0) rotate(-28deg)" },
        },
        "@media (prefers-reduced-motion: reduce)": {
          ".eason-meteor": { display: "none" },
        },
        ".eason-meteor": {
          position: "absolute",
          width: "180px",
          height: "2px",
          borderRadius: "999px",
          background: "linear-gradient(90deg, rgba(235,248,255,.95), rgba(204,231,246,.35), transparent)",
          transform: "rotate(-28deg)",
          opacity: 0,
          filter: "drop-shadow(0 0 7px rgba(190,228,247,.35))",
        },
        ".eason-meteor.fly": {
          animation: "easonMeteorFly linear forwards",
        },
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      />
      <Box
        position="absolute"
        inset={0}
        zIndex={1}
        _before={{
          content: '""',
          position: "absolute",
          width: "42vw",
          height: "58vw",
          left: "-18vw",
          top: "18vh",
          borderRadius: "50%",
          filter: "blur(82px)",
          opacity: isLight ? 0.22 : 0.18,
          mixBlendMode: isLight ? "multiply" : "screen",
          background: isLight
            ? "radial-gradient(circle, rgba(126,163,184,.18), transparent 70%)"
            : "radial-gradient(circle, rgba(183,214,232,.34), transparent 70%)",
          animation: "easonFloatMist 22s ease-in-out infinite",
        }}
        _after={{
          content: '""',
          position: "absolute",
          width: "46vw",
          height: "60vw",
          right: "-20vw",
          top: "18vh",
          borderRadius: "50%",
          filter: "blur(82px)",
          opacity: isLight ? 0.18 : 0.18,
          mixBlendMode: isLight ? "multiply" : "screen",
          background: isLight
            ? "radial-gradient(circle, rgba(202,219,229,.22), transparent 72%)"
            : "radial-gradient(circle, rgba(236,211,226,.28), transparent 72%)",
          animation: "easonFloatMist 22s ease-in-out infinite",
          animationDelay: "-11s",
        }}
      />
      <Box ref={meteorLayerRef} position="absolute" inset={0} zIndex={2} display={isLight ? "none" : "block"} />
    </Box>
  );
}
