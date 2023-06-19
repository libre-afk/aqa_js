const enterprises = [
    {
      id: 1,
      name: "Предприятие 1",
      departments: [
        {
          id: 2,
          name: "Отдел тестирования",
          employees_count: 10,
        },
        {
          id: 3,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 4,
          name: "Администрация",
          employees_count: 15,
        },
      ],
    },
    {
      id: 5,
      name: "Предприятие 2",
      departments: [
        {
          id: 6,
          name: "Отдел разработки",
          employees_count: 50,
        },
        {
          id: 7,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 8,
          name: "Отдел охраны труда",
          employees_count: 5,
        },
      ],
    },
    {
      id: 9,
      name: "Предприятие 3",
      departments: [
        {
          id: 10,
          name: "Отдел аналитики",
          employees_count: 0,
        },
      ],
    },
  ];
  
  // 1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.
  
  // **Пример:**
  
  // Предприятие 1 (45 сотрудников)
  // - Отдел тестирования (10 сотрудников)
  // - Отдел маркетинга (20 сотрудников)
  // - Администрация (15 человек)
  // Предприятие 2 (75 сотрудников)
  // - Отдел разработки (50 сотрудников)
  // - Отдел маркетинга (20 сотрудников)
  // - Отдел охраны труда (5 сотрудников)
  // Предприятие 3 (нет сотрудников)
  // - Отдел аналитики (нет сотрудников)
  
  function getEmployeesAmount(departments) {
    return departments.reduce((acc, department) => {
      acc += department.employees_count;
      return acc;
    }, 0);
  }
  function printEnterpriseStructure(enterprises) {
    enterprises.forEach((enterprise) => {
      console.log(
        `${enterprise["name"]} (${getEmployeesAmount(
          enterprise["departments"]
        )} сотрудников)`
      );
      enterprise["departments"].forEach((department) => {
        console.log(
          `- ${department["name"]} (${department["employees_count"]} сотрудников)`
        );
      });
    });
  }
  console.log(printEnterpriseStructure(enterprises))
  
  // 2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, к которому относится).
  
  // Пример:
  // getEnterpriseName(4) // Предприятие 1
  // getEnterpriseName("Отдел маркетинга") // Предприятие 2
  
  function getEnterpriseName(search) {
      let result = null;
    if (typeof search === "string") {
  
      enterprises.forEach((enterprise) => {
        enterprise["departments"].forEach((department) => {
          if (department["name"] === search) {
            result = enterprise["name"];
            return;
          }
        });
      });
      return result;
    } else {
      enterprises.forEach((enterprise) => {
        enterprise["departments"].forEach((department) => {
          if (department["id"] === search) {
            result = enterprise["name"];
            return;
          }
        });
      });
      return result;
    }
  }
  
  console.log(getEnterpriseName("Отдел маркетинга"));
  console.log(getEnterpriseName(2));
  
  // 3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия
  
  // Пример:
  // addEnterprise("Название нового предприятия")
  
  function addEnterprise(enterpriseName) {
    let enterprise = {
      name: enterpriseName,
      departments: [],
      id: getId(enterprises[enterprises.length - 1]),
    };
    enterprises.push(enterprise);
    return enterprises;
  }
  
  function getId(enterprise) {
    if (enterprise["departments"].length == 0) {
      return enterprise["id"] + 1;
    } else {
      return (
        enterprise["departments"][enterprise["departments"].length - 1]["id"] + 1
      );
    }
  }
  
  console.log(addEnterprise("Название нового предприятия"));
  
  // 4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия,
  // в которое будет добавлен отдел и название отдела.
  
  // Пример:
  // addDepartment(1, "Название нового отдела")
  
  function addDepartment(id, departmentName) {
    enterprises.forEach((enterprise) => {
      if (enterprise["id"] === id) {
        enterprise["departments"].push({ name: departmentName });
        return;
      }
    });
    return enterprises;
  }
  console.log(addDepartment(1, "Название нового отдела"));
  
  // 5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.
  
  // Пример:
  // editEnterprise(1, "Новое название предприятия")
  
  function editEnterprise(id, enterpriseName) {
    enterprises.forEach((enterprise) => {
      if (enterprise["id"] === id) {
        enterprise["name"] = enterpriseName;
        return;
      }
    });
    return enterprises;
  }
  
  console.log(editEnterprise(1, "OOO макарэна"))
  
  // 6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.
  
  // Пример:
  // editDepartment(7, "Новое название отдела")
  
  function editDepartment(id, departmentName) {
    enterprises.forEach((enterprise) => {
      enterprise["departments"].forEach((department) => {
        if (department["id"] === id) {
          department["name"] = departmentName;
          return;
        }
      });
    });
    return enterprises;
  }
  console.log(editDepartment(7, "Новое название отдела"))
  enterprises.forEach((enterprise) => {
      enterprise["departments"].forEach((department) => {
        console.log(
          `- ${department["name"]}`
        );
      });
    });
  
  // 7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.
  
  // Пример:
  // deleteEnterprise(1)
  
  function deleteEnterprise(id) {
    let index = 0;
    enterprises.forEach((enterprise) => {
      if (enterprise["id"] === id) {
        enterprises.splice(index, 1);
        return;
      }
      index++;
    });
    return enterprises;
  }
  
  console.log(deleteEnterprise(5));
  
  // 8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.
  
  // Пример:
  // deleteDepartment(3)
  
  function deleteDepartment(id) {
    enterprises.forEach((enterprise) => {
      let index = 0;
      enterprise["departments"].forEach((department) => {
        if (department["id"] === id) {
          enterprise["departments"].splice(index, 1);
          return;
        }
        index++;
      });
    });
    return enterprises;
  }
  
  console.log(deleteDepartment(3));
  
  // 9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения:
  // id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).
  
  // Пример:
  // moveEmployees(2, 3)
  
  function moveEmployees(idFrom, idTo) {
    let departmentFrom;
    let departmentTo;
    let enterpriseFrom;
    let enterpriseTo;
    enterprises.forEach((enterprise) => {
      enterprise["departments"].forEach((department) => {
        if (department["id"] === idFrom) {
          departmentFrom = department;
          enterpriseFrom = enterprise;
        }
        if (department["id"] === idTo) {
          departmentTo = department;
          enterpriseTo = enterprise;
        }
      });
    });
    if (enterpriseTo === enterpriseFrom) {
      departmentTo["employees_count"] += departmentFrom["employees_count"];
      departmentFrom["employees_count"] = 0;
    }
    return enterprises;
  
  }
  printEnterpriseStructure(moveEmployees(2, 8));
  
  
  