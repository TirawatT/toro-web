// import { EisTaskMonitor } from "models/EisTaskMonitor";
// import { acceptHMRUpdate, defineStore } from "pinia";

// export const useTaskSummaryStore = defineStore("taskSummary", () => {
//   const tasks = ref<EisTaskMonitor[]>();
//   const apiUrl = useRuntimeConfig().public.apiBase;

//   async function getTasks() {
//     tasks.value = [];
//     const { data } = await useCustomFetch<EisTaskMonitor[]>(
//       `${apiUrl}/api/TaskMonitor`,
//       {
//         query: {
//           taskName: storeFilter.taskName,
//           category: storeFilter.category,
//           status: storeFilter.status,
//         },
//       }
//     );
//     tasks.value = data.value as EisTaskMonitor[];
//   }

//   return { tasks, taskTransactions, getTasks };
// });
// if (import.meta.hot) {
//   import.meta.hot.accept(acceptHMRUpdate(useTaskSummaryStore, import.meta.hot));
// }
