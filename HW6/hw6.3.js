// Task 3. ** Ниже найдете разноуровневый массив объектов company, очень похожий на массив из прошлого задания, 
//   только количество вложенностей может быть не ограничено. 
//   Задание: написать функцию: 
//   Функция строит древовидный список компании.
//   При ее вызове в консоль должен вывестись список подразделений компании с указанием количества сотрудников и с 
//   соблюдением вложенности подразделений.

const company = [
    {
      id: 1,
      name: "Компания",
      parent: null,
      users_count: 10,
      children: [
        {
          id: 2,
          name: "Отдел тестирования",
          parent: 1,
          users_count: 7,
          children: [
            {
              id: 3,
              name: "Тестирование Web",
              parent: 2,
              users_count: 5,
            },
            {
              id: 4,
              name: "Тестирование Mobile",
              parent: 2,
              users_count: 0,
            },
          ],
        },
        {
          id: 5,
          name: "Отдел маркетинга",
          parent: 1,
          users_count: 30,
        },
        {
          id: 6,
          name: "Администрация",
          parent: 1,
          users_count: 25,
          children: [
            {
              id: 7,
              name: "Бухгалтерия",
              parent: 6,
              users_count: 10,
            },
            {
              id: 8,
              name: "Менеджмент",
              parent: 6,
              users_count: 15,
              children: [
                {
                  id: 9,
                  name: "Подраздел менеджмента 1",
                  parent: 8,
                  users_count: 5,
                },
                {
                  id: 10,
                  name: "Подраздел менеджмента 2",
                  parent: 8,
                  users_count: 10,
                },
              ],
            },
            {
              id: 11,
              name: "HR",
              parent: 6,
              users_count: 1,
            },
          ],
        },
      ],
    },
  ];
  

  function printCompanyHierarchy(company, indent = 0) {
    let formattedString = "";
  
    for (const department of company) {
      formattedString += `${"-".repeat(indent)}${department.name} (${department.users_count})\n`;
  
      if (department.children) {
        formattedString += printCompanyHierarchy(department.children, indent + 2);
      }
    }
  
    return formattedString;
  }
  
  console.log(printCompanyHierarchy(company));
  