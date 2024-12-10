import Enum from "./components/Enum";

interface User {
  id: number;
  userName: string;
  age: number;
  email: string;
}

// Greeting function
function greetUser(user: User): string {
  return `Hello, ${user.userName}! You are ${user.age} years old.`;
}

const users: User[] = [
  { id: 1, userName: "Farzeen", age: 25, email: "fsdf@gmail.com" },
  { id: 2, userName: "Fahad", age: 23, email: "cccccc@gmail.com" },
  { id: 3, userName: "Touseef", age: 24, email: "hhhhhh@gmail.com" },
];

const App = () => {
  return (
    <>
      <Enum />
      <div className="min-h-screen bg-gray-100 py-10 px-5">
        <div className="mx-auto max-w-7xl grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white shadow-md rounded-lg overflow-hidden p-5 flex flex-col items-center"
            >
              <img
                className="h-24 w-24 rounded-full object-cover mb-4"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="profile"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {user.userName}
              </h3>
              <p className="text-gray-600">{user.age} years old</p>
              <p className="text-gray-600 mb-4">{user.email}</p>
              <p className="text-sm font-medium text-indigo-600">
                {greetUser(user)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
