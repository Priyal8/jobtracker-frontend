import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import JobModal from "../components/JobModal";

export default function Dashboard() {
  const API_URL = process.env.REACT_APP_API_URL;
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");  // Add error state
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [editingJobId, setEditingJobId] = useState(null);
  const [formData, setFormData] = useState({
    position: "",
    company: "",
    location: "",
    status: "",
    notes: ""
  });

  const fetchJobs = async () => {
    setLoading(true);
    setError(""); // Reset error
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/"); // redirect if token is missing
        return;
      }

      const response = await axios.get(`${API_URL}/jobs`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setJobs(response.data.jobs); // backend should return jobs array
    } catch (err) {
      const message = err?.response?.data?.msg || err.message || "Failed to fetch jobs";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const openCreateModal = () => {
    setEditingJobId(null);
    setFormData({
      position: "",
      company: "",
      location: "",
      status: "pending",
      notes: ""
    });
    setShowModal(true);
  };

  const openEditModal = (id) => {
    const job = jobs.find(j => j._id === id);
    if (job) {
      setEditingJobId(id);
      setFormData({
        position: job.position,
        company: job.company,
        location: job.location,
        status: job.status,
        notes: job.notes || ""
      });
      setShowModal(true);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleSubmit = async () => {
    const token = localStorage.getItem("token");
    const config = { headers: { Authorization: `Bearer ${token}` } };

    try {
      if (editingJobId) {
        await axios.patch(`${API_URL}/jobs/${editingJobId}`, formData, config);
      } else {
        await axios.post(`${API_URL}/jobs`, formData, config);
      }
      setShowModal(false);
      fetchJobs();
    } catch (error) {
      alert("Failed to save job.");
    }
  };

  const handleDelete = async (jobId) => {
  const confirmDelete = window.confirm("Are you sure you want to delete this job?");
  if (!confirmDelete) return;

  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    await axios.delete(`${API_URL}/jobs/${jobId}`, config);
    fetchJobs(); // Refresh job list after deletion
  } catch (err) {
    console.error("Failed to delete job:", err.response?.data || err.message);
    alert("Failed to delete job.");
  }
};


  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2 text-xl font-bold text-black">
          <span><img src="src/assets/logo.svg" alt="Logo" /></span>
          <span>JobTracker</span>
        </div>
        <div className="hidden h-10 md:flex space-x-4">
          <button onClick={openCreateModal} className="w-36 flex items-center justify-center text-center px-4 py-2 rounded-lg bg-darkblue text-white font-bold hover:bg-darkest">
            CREATE JOB
          </button>
          <button
            className="w-24 flex items-center justify-center text-center px-4 py-2 rounded-lg border-2 border-darkblue text-darkblue font-bold hover:bg-indigo-50"
            onClick={handleLogout}
          >
            LOGOUT
          </button>
        </div>
      </nav>
      {/* Modal */}
      <JobModal
        visible={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={handleSubmit}
        formData={formData}
        setFormData={setFormData}
        editing={!!editingJobId}
      />

      {/* Main */}
      <main className="p-6">
        {loading ? (
          <p className="text-gray-600">Loading jobs...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : jobs.length === 0 ? (
          <p className="text-gray-500">No jobs found.</p>
        ) : (
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {jobs.map((job) => (
              <div key={job._id} className="bg-white p-4 rounded-xl shadow-md relative">
                <h3 className="text-lg font-semibold">{job.position}</h3>
                <p className="text-gray-600">{job.company}</p>
                <p className="text-gray-600">{job.location}</p>
                <p className="text-gray-600">{job.notes}</p>
                <p className="mt-2 w-28 h-8 flex items-center justify-center text-center text-sm text-white font-bold rounded-xl bg-darkest">{job.status.toUpperCase()}</p>
                
                <button
                  className="absolute top-3 right-16 bg-white border-2 text-darkblue text-sm px-3 py-1 rounded hover:bg-lightbg"
                  onClick={() => handleDelete(job._id)}
                >
                  Delete
                </button>

                {/* Edit button */}
                <button
                className="absolute top-3 right-3 bg-darkblue text-white text-sm px-3 py-1 rounded hover:bg-darkest"
                onClick={() => openEditModal(job._id)}
                >
                Edit
                </button>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
