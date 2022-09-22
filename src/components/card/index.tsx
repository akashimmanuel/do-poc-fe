import React from "react";

interface IProps {
  data: { id: number; name: string; status: string };
  handler: (id: any) => void;
}

const Card: React.FC<IProps> = ({ data, handler }) => {
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">{data.name}</h2>
        <p className="text-gray-700">{data.status}</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3"
          onClick={() => handler(data.id)}
        >
          delete
        </button>
      </div>
    </>
  );
};

export default Card;
