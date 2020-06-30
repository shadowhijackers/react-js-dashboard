const A4SheetAction = Object.freeze({
  ADD_CHART: "[A4SHEET] ADD Chart",
});

const addChart = (payload) => {
  return {
    type: A4SheetAction.ADD_CHART,
    payload,
  };
};

export { addChart, A4SheetAction };
