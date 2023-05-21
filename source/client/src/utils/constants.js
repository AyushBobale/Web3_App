export const CONTRACT = {
  address: "0xB8b071cA6cBAAdC007a4E93538F9Ec9E5513E90c",
  contracts: {
    read: { getUserIds: "getUserIds", getTodos: "getTodos" },
  },
  contractABI: [
    { stateMutability: "payable", type: "fallback" },
    {
      inputs: [{ internalType: "string", name: "_id", type: "string" }],
      name: "addList",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "string", name: "listid", type: "string" },
        { internalType: "string", name: "title", type: "string" },
        { internalType: "string", name: "description", type: "string" },
      ],
      name: "addTodo",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "", type: "address" },
        { internalType: "uint256", name: "", type: "uint256" },
      ],
      name: "address2ListIds",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "string", name: "todoId", type: "string" },
        { internalType: "string", name: "listid", type: "string" },
      ],
      name: "deleteTodo",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "user", type: "address" }],
      name: "getTodos",
      outputs: [
        {
          components: [
            { internalType: "string", name: "id", type: "string" },
            {
              components: [
                { internalType: "string", name: "id", type: "string" },
                { internalType: "string", name: "title", type: "string" },
                { internalType: "string", name: "description", type: "string" },
                { internalType: "bool", name: "isDone", type: "bool" },
              ],
              internalType: "struct TodoLists.TodoItem[]",
              name: "todos",
              type: "tuple[]",
            },
          ],
          internalType: "struct TodoLists.TodoList[]",
          name: "",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getUserIds",
      outputs: [{ internalType: "string[]", name: "", type: "string[]" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "string", name: "", type: "string" },
        { internalType: "uint256", name: "", type: "uint256" },
      ],
      name: "id2TodoItems",
      outputs: [
        { internalType: "string", name: "id", type: "string" },
        { internalType: "string", name: "title", type: "string" },
        { internalType: "string", name: "description", type: "string" },
        { internalType: "bool", name: "isDone", type: "bool" },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      name: "listIds",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "string", name: "", type: "string" }],
      name: "listIds2exists",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "string", name: "_id", type: "string" }],
      name: "removeList",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "todoCnt",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "string", name: "todoId", type: "string" },
        { internalType: "string", name: "listid", type: "string" },
        { internalType: "string", name: "title", type: "string" },
        { internalType: "string", name: "description", type: "string" },
      ],
      name: "updateTodo",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "", type: "address" }],
      name: "user2used",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      name: "users",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    { stateMutability: "payable", type: "receive" },
  ],
  todoListABI: [
    {
      inputs: [
        {
          internalType: "string",
          name: "_id",
          type: "string",
        },
      ],
      name: "addList",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "listid",
          type: "string",
        },
        {
          internalType: "string",
          name: "title",
          type: "string",
        },
        {
          internalType: "string",
          name: "description",
          type: "string",
        },
      ],
      name: "addTodo",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "todoId",
          type: "string",
        },
        {
          internalType: "string",
          name: "listid",
          type: "string",
        },
      ],
      name: "deleteTodo",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_id",
          type: "string",
        },
      ],
      name: "removeList",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      stateMutability: "payable",
      type: "receive",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "todoId",
          type: "string",
        },
        {
          internalType: "string",
          name: "listid",
          type: "string",
        },
        {
          internalType: "string",
          name: "title",
          type: "string",
        },
        {
          internalType: "string",
          name: "description",
          type: "string",
        },
      ],
      name: "updateTodo",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      stateMutability: "payable",
      type: "fallback",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "address2ListIds",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "user",
          type: "address",
        },
      ],
      name: "getTodos",
      outputs: [
        {
          components: [
            {
              internalType: "string",
              name: "id",
              type: "string",
            },
            {
              components: [
                {
                  internalType: "string",
                  name: "id",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "title",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "description",
                  type: "string",
                },
                {
                  internalType: "bool",
                  name: "isDone",
                  type: "bool",
                },
              ],
              internalType: "struct TodoLists.TodoItem[]",
              name: "todos",
              type: "tuple[]",
            },
          ],
          internalType: "struct TodoLists.TodoList[]",
          name: "",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getUserIds",
      outputs: [
        {
          internalType: "string[]",
          name: "",
          type: "string[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "id2TodoItems",
      outputs: [
        {
          internalType: "string",
          name: "id",
          type: "string",
        },
        {
          internalType: "string",
          name: "title",
          type: "string",
        },
        {
          internalType: "string",
          name: "description",
          type: "string",
        },
        {
          internalType: "bool",
          name: "isDone",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "listIds",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      name: "listIds2exists",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "todoCnt",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "user2used",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "users",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ],
  contextABI: [],
};
