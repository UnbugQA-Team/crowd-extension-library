import { ActivatedWidgetResponse } from "../model/widget";
import { extensionApiUrl } from "../utils";

export const fetchActivatedWidget = async (
  workspaceId: string
): Promise<ActivatedWidgetResponse> => {
  const response = await fetch(
    `${extensionApiUrl}/active-widgets/${workspaceId}`
  );
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }
  return response.json();
};
