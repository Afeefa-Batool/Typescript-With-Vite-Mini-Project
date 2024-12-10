// src/components/StatusCard.tsx
import { useState } from "react";

// Enum definition for status
enum Status {
  Active = "active",
  Inactive = "inactive",
  Pending = "pending",
}

const Enum = () => {
  const [status, setStatus] = useState<Status>(Status.Pending);

  const getStatusClass = (status: Status) => {
    switch (status) {
      case Status.Active:
        return "bg-green-500 text-white";
      case Status.Inactive:
        return "bg-gray-500 text-white";
      case Status.Pending:
        return "bg-orange-500 text-black";
      default:
        return "bg-gray-200 text-black";
    }
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="w-72 p-6 rounded-lg shadow-lg">
          <div className={`p-4 rounded ${getStatusClass(status)}`}>

            <h2 className="text-xl font-bold mb-4">Current Status</h2>
            <p className="text-sm">
              The current status is{" "}
              <span className="font-medium">{status}</span>.
            </p>
            <div className="mt-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                onClick={() => setStatus(Status.Active)}
              >
                Set Active
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2"
                onClick={() => setStatus(Status.Inactive)}
              >
                Set Inactive
              </button>
              <button
                className="bg-yellow-500 text-white px-4 py-2 rounded-md"
                onClick={() => setStatus(Status.Pending)}
              >
                Set Pending
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Enum;
