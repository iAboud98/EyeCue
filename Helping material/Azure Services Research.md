# Azure Services Research

Researching Azure services that may be used in our project journey, including features, usage, and potential roles in our MVP.

---

## 🔍 Azure Services by Category

---

### 🧠 AI + Machine Learning
| Service | Usage | Status |
|--------|-------|-------|
| **Azure Machine Learning** | For training, deploying, managing custom models (if not using pre-trained) | Discarded ❌ |
| **Azure Open Datasets** | Helpful for model training (if needed) | Discarded ❌ |
| **Azure AI Vision** | Includes Face API, can detect head poses — strong candidate | Discarded ❌ |
| **Azure AI Custom Vision** | If AI Vision isn’t accurate enough, use to build more precise models | Discarded ❌ |

---

### 📊 Analytics
| Service | Usage | Status |
|--------|-------|-------|
| **Azure Stream Analytics** | Real-time processing and monitoring of incoming data (e.g., attention) | Discarded ❌ |
| **Event Hubs** | Event ingestion service, works well with Stream Analytics | Discarded ❌ |
| **Power BI Embedded** | For dashboards to visualize live/aggregated student attention data | Discarded ❌ |

---

### ⚙️ Compute
| Service | Usage | Status |
|--------|-------|-------|
| **Azure Functions** | Serverless backend logic (e.g., attention drop alerts) | Discarded ❌ |
| **App Service** | Host API or teacher-facing dashboard | Discarded ❌ |
| **Static Web Apps** | Host lightweight frontend (React, etc.) with GitHub integration | Possible ✅ |
| **Azure Container Apps** | Ideal for running containerized model inference logic or backend APIs | Sure ✅ |

---

### 📦 Containers
| Service | Usage | Status |
|--------|-------|-------|
| **Azure Container Apps** | Main hosting platform for backend logic in containers | Sure ✅ |
| **Azure Container Registry (ACR)** | Required to store your Docker images securely if using custom containers | Possible ✅ |

---

### 🗃️ Database
| Service | Usage | Status |
|--------|-------|-------|
| **Azure Table Storage** | Recommended — lightweight key-value store for session/attention data | Possible ✅ |
| **Azure Cosmos DB** | NoSQL with global scale and more flexibility | Discarded ❌ |
| **Azure SQL / PostgreSQL / MySQL** | Use if structured relational data and familiarity are required | Discarded ❌ |

---

### 🔄 Integration
| Service | Usage | Status |
|--------|-------|-------|
| **Azure Web PubSub** | Real-time updates from backend to teacher dashboard (recommended) | Possible ✅ |
| **API Management** | Secure and monitor APIs in production deployments | Discarded ❌ |

---

### 🛠️ Management & Governance
| Service | Usage | Status |
|--------|-------|-------|
| **Azure Monitor** | Track logs, performance metrics, and health checks | Possible ✅ |
| **Azure Portal** | Main dashboard to manage and deploy services | Possible ✅ |

---

### 🌐 Networking
| Service | Usage | Status |
|--------|-------|-------|
| **Virtual Network** | Required if you're connecting storage, compute, or backend services securely inside a VNet | Discarded ❌ |

---

### 🔐 Security
| Service | Usage | Status |
|--------|-------|-------|
| **Azure Key Vault** | Store secrets, API keys, and connection strings securely | Possible ✅ |

---

### 💾 Storage
| Service | Usage | Status |
|--------|-------|-------|
| **Azure Blob Storage** | Store webcam frames or session files (unstructured data) | Possible ✅ |
| **Storage Accounts** | Required to access any Azure storage service (Blob, Table, etc.) | Possible ✅ |

---

### 🌐 Web
| Service | Usage | Status |
|--------|-------|-------|
| **App Service** | Easiest way to host non-container backend (Flask, FastAPI) | Discarded ❌ |
| **Static Web Apps** | Host frontend UI (React, Vue) with GitHub auto-deploy | Possible ✅ |
| **Azure Web PubSub** | Real-time push from backend to frontend | Possible ✅ |
| **Azure SignalR Service** *(Optional)* | Use if frontend already depends on SignalR (alternative to Web PubSub) | Discarded ❌ |
| **Azure Container Apps** | Run containerized backend or inference API with low ops | Sure ✅ |


--- 

## Summary

- We need only **Azure Container Apps** Service for our MVP Scope


