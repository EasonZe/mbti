/* 中文标注：测试页面路由，挂载正式答题界面。 */
import MainLayout from "../../components/layouts/main-layout";
import TestDisplay from "../../components/test/test-display";

export default function TestPage() {
  return (
    <MainLayout>
      <TestDisplay />
    </MainLayout>
  );
}
