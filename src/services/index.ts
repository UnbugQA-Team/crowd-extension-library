import { ActivatedWidgetResponse } from "../model/widget";

const BASE_URL = "https://api.stagingv2.crowdapp.io/api/v1";

export const fetchActivatedWidget = async (
  workspaceId: string
): Promise<ActivatedWidgetResponse> => {
  const response = await fetch(`${BASE_URL}/active-widgets/${workspaceId}`);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }
  return response.json();
};
