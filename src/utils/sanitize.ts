import type { Node, Edge } from "@xyflow/react";

export const serializeNodes = (nodes: Node[]) =>
  nodes.map((node) => ({
    id: node.id,
    type: node.type ?? "default",
    position: {
      x: node.position.x,
      y: node.position.y,
    },
    data: {
      label: node.data?.label ?? "",
    },
  }));

export const serializeEdges = (edges: Edge[]) =>
  edges.map((edge) => ({
    id: edge.id,
    source: edge.source,
    target: edge.target,
    label: edge.label ?? "",
  }));
