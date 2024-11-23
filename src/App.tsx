import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import EventList from "./pages/EventList";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to="/events" />} />
          <Route path="events" element={<Layout />}>
          <Route index element={<EventList />} />
          {/* 動的な値に応じたURL */}
          <Route path="events/:id" element={<p>イベント詳細を表示</p>} />
          <Route path="events/:id/apply" element={<p>イベントに申し込む</p>} />
          <Route path="events/:id/confirm" element={<p>申し込み完了です</p>} />
        </Route>
        {/* 存在しないURLの処理 */}
        <Route path="*" element={<p>404 not found</p>} />
      </Routes>
    </BrowserRouter>
  );
}