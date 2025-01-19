'use client';

import { ReactNode,  } from 'react';
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from '@liveblocks/react/suspense';
import { LiveMap } from '@liveblocks/client';
import Loader from '@/components/new_components/Loader';

export function Room({ children }: { children: ReactNode }) {
  return (
    <LiveblocksProvider
      publicApiKey="pk_dev_ArnpcSEx2uOCH2cAgkfU2leDBsqgjjwzHyDDvvawVi7x1kofVwBZZ-4eYj8mdoo1">
      <RoomProvider
        id="my-room"
        initialPresence={{
          cursor: null,
          cursorColor: null,
          editingText: null,
        }}
        initialStorage={{
          canvasObjects: new LiveMap<string, any>(),
        }}>
        <ClientSideSuspense fallback={<Loader />}>
          {/* <StorageDebugger /> Add this for debugging */}
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}

// // Optional Debugging Component
// function StorageDebugger() {
//   const canvasObjects = useStorage((root) => root.canvasObjects);

//   useEffect(() => {
//     if (!canvasObjects) {
//       console.warn("canvasObjects not initialized");
//     } else {
//       console.log("canvasObjects initialized:", canvasObjects);
//     }
//   }, [canvasObjects]);

//   return null;
// }
