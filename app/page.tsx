'use client';
import Swiper from "./components/Swiper";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
export default function Home() {
  return (
    <main className="flex flex-col justify-between align items-center p-10">
      <DndProvider backend={HTML5Backend}>
        <Swiper/>
      </DndProvider>
    </main>
  );
}
