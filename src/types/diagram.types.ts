import type { Node, Edge } from "@xyflow/react";

export interface TDiagram {
  id: string;
  title: string;
  ownerId: string;
  nodes: Node[];
  edges: Edge[];
  createdAt?: unknown; // Firestore Timestamp
  updatedAt?: unknown; // Firestore Timestamp
}

export interface TUpdateDiagramPayload {
  title?: string;
  nodes?: Node[];
  edges?: Edge[];
}
