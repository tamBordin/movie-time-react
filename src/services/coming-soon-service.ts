import { IResponseComingSoon } from "../models/coming-soon.model";
import { apiKey, http } from "./http";

export const ComingSoonService = {
  getAll: () => {
    return http.get<IResponseComingSoon>(`/ComingSoon/${apiKey}`);
  },
};
