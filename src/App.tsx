import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import EventList from "./pages/EventList";
import EventDetail from "./pages/EventDetail";
import EventApply from "./pages/EventApply";
import EventConfirm from "./pages/EventConfirm";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to="/events" />} />
        {/* 子要素になるので暗黙的にevents/:id となる */}
          <Route path="events" element={<Layout />}>
          <Route index element={<EventList />} />
          {/* 動的な値に応じたURL */}
          <Route path=":id" element={<EventDetail/>} />
          <Route path=":id/apply" element={<EventApply/>} />
          <Route path=":id/confirm" element={<EventConfirm/>} />
        </Route>
        {/* 存在しないURLの処理 */}
        <Route path="*" element={<p>404 not found</p>} />
      </Routes>
    </BrowserRouter>
  );
}