import { apiSlice } from "@/src/api/apiSlice";

export const descriptionPickerSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDescriptionPicker: builder.query({
      query: () => {
        return "/descriptionPicker";
      },
    }),
  }),
  overrideExisting: true,
});

export const {useGetDescriptionPickerQuery} = descriptionPickerSlice;
