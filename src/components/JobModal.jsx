// src/components/JobModal.jsx
import React from "react";

export default function JobModal({
  visible,
  onClose,
  onSubmit,
  formData,
  setFormData,
  editing
}) {
  if (!visible) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md relative">
        <h2 className="text-xl font-bold mb-4">
          {editing ? "Edit Job" : "Create Job"}
        </h2>

        <div className="space-y-4">
          {["position", "company", "location", "notes"].map((field) => (
            <input
              key={field}
              name={field}
              type="text"
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              className="w-full p-2 border rounded"
              value={formData[field]}
              onChange={handleChange}
            />
          ))}

          <select
            name="status"
            className="w-full p-2 border rounded"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="applied">Applied</option>
            <option value="interview">Interview</option>
            <option value="offer">Offer</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>

        <div className="mt-6 flex justify-end space-x-2">
          <button
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-darkblue text-white rounded hover:bg-darkest"
            onClick={onSubmit}
          >
            {editing ? "Update" : "Create"}
          </button>
        </div>
      </div>
    </div>
  );
}
