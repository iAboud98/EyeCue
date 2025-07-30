# Azure Services Research

Researching Azure services that may be used in our project journey, including features, usage, and potential roles in our MVP.

---

## 📌 Software Architecture Overview

**1. Client Side (Student)**  
- Opens webcam  
- Sends frames via API to backend  

**2. Backend Side (Cloud)**  
- Receives frame  
- (Optional) Saves frame to storage/DB  
- Processes frame for attention analysis  
- Sends alerts if needed  
- Sends results to teacher  

**3. Teacher Side**  
- Receives student information  
- Displays data on UI  

---

## 🔍 Azure Services by Category

---

### 🧠 AI + Machine Learning
| Service | Usage |
|--------|-------|
| **Azure Machine Learning** | For training, deploying, managing custom models (if not using pre-trained) |
| **Azure Open Datasets** | Helpful for model training (if needed) |
| **Azure AI Vision** | Includes Face API, can detect head poses — strong candidate |
| **Azure AI Custom Vision** | If AI Vision isn’t accurate enough, use to build more precise models |

---

### 📊 Analytics
| Service | Usage |
|--------|-------|
| **Azure Stream Analytics** | Real-time processing and monitoring of incoming data (e.g., attention) |
| **Event Hubs** | Event ingestion service, works well with Stream Analytics |
| **Power BI Embedded** | For dashboards to visualize live/aggregated student attention data |

---

### ⚙️ Compute
| Service | Usage |
|--------|-------|
| **Azure Functions** | Serverless backend logic (e.g., attention drop alerts) |
| **App Service** | Host API or teacher-facing dashboard |
| **Static Web Apps** | Host lightweight frontend (React, etc.) with GitHub integration |
| **Azure Container Apps** | Ideal for running containerized model inference logic or backend APIs |

---

### 📦 Containers
| Service | Usage |
|--------|-------|
| **Azure Container Apps** | Main hosting platform for backend logic in containers |
| **Azure Container Registry (ACR)** | Required to store your Docker images securely if using custom containers |

---

### 🗃️ Database
| Service | Usage |
|--------|-------|
| **Azure Table Storage** | Recommended — lightweight key-value store for session/attention data |
| **Azure Cosmos DB** *(Optional)* | NoSQL with global scale and more flexibility |
| **Azure SQL / PostgreSQL / MySQL** *(Optional)* | Use if structured relational data and familiarity are required |

---

### 🔄 Integration
| Service | Usage |
|--------|-------|
| **Azure Web PubSub** | Real-time updates from backend to teacher dashboard (recommended) |
| **API Management** *(Optional)* | Secure and monitor APIs in production deployments |

---

### 🛠️ Management & Governance
| Service | Usage |
|--------|-------|
| **Azure Monitor** | Track logs, performance metrics, and health checks |
| **Azure Portal** | Main dashboard to manage and deploy services |

---

### 🌐 Networking
| Service | Usage |
|--------|-------|
| **Virtual Network** | Required if you're connecting storage, compute, or backend services securely inside a VNet |

---

### 🔐 Security
| Service | Usage |
|--------|-------|
| **Azure Key Vault** | Store secrets, API keys, and connection strings securely |

---

### 💾 Storage
| Service | Usage |
|--------|-------|
| **Azure Blob Storage** | Store webcam frames or session files (unstructured data) |
| **Storage Accounts** | Required to access any Azure storage service (Blob, Table, etc.) |

---

### 🌐 Web
| Service | Usage |
|--------|-------|
| **App Service** | Easiest way to host non-container backend (Flask, FastAPI) |
| **Static Web Apps** | Host frontend UI (React, Vue) with GitHub auto-deploy |
| **Azure Web PubSub** | Real-time push from backend to frontend |
| **Azure SignalR Service** *(Optional)* | Use if frontend already depends on SignalR (alternative to Web PubSub) |
| **Azure Container Apps** | Run containerized backend or inference API with low ops |


--- 

## Azure Services Comparison and Recommendations

Some Azure services overlap in functionality or have alternatives. Below is a comparison to help decide the best fit for our MVP

---

### 1. Backend Hosting: App Service vs Azure Container Apps

| Factor                  | App Service                                   | Azure Container Apps                     |
|-------------------------|----------------------------------------------|-----------------------------------------|
| Ease of Use             | Easier for simple, non-containerized apps    | Best for containerized workloads        |
| Deployment              | Supports code and containers                  | Container-native deployment              |
| Scaling                 | Auto-scale, less flexible                      | Designed for microservices and scale-out|
| Operations Overhead     | Lower                                         | Slightly higher due to container management |
| **Recommendation**      | Use **App Service** if backend is simple     | Use **Container Apps** if containers are needed |

---

### 2. Real-time Communication: Azure Web PubSub vs Azure SignalR Service

| Factor                  | Azure Web PubSub                              | Azure SignalR Service                    |
|-------------------------|----------------------------------------------|-----------------------------------------|
| Protocol Support        | WebSocket, REST, multi-language clients      | Primarily SignalR protocol (.NET focused) |
| Integration             | Language-agnostic, flexible                    | Best for Microsoft/.NET ecosystems      |
| **Recommendation**      | Prefer **Azure Web PubSub** for flexibility  | Use SignalR only if frontend uses SignalR |

---

### 3. NoSQL Storage: Azure Table Storage vs Azure Cosmos DB

| Factor                  | Azure Table Storage                           | Azure Cosmos DB                         |
|-------------------------|----------------------------------------------|-----------------------------------------|
| Complexity              | Simple key-value store                        | Multi-model NoSQL database               |
| Performance            | Fast, low latency                             | Fast, globally distributed               |
| Cost                   | Cheaper for simple use cases                  | Higher cost, more features                |
| **Recommendation**     | Start with **Table Storage** for MVP         | Upgrade to Cosmos DB if scaling or features needed |

---

### 4. Frontend Hosting: Static Web Apps vs App Service

| Factor                  | Static Web Apps                              | App Service                            |
|-------------------------|----------------------------------------------|---------------------------------------|
| Specialization          | Optimized for frontend frameworks (React, Vue, etc.) | General purpose web hosting            |
| Deployment              | GitHub integrated, auto builds               | Manual or CI/CD setup                   |
| Cost                    | Free tier available                           | Based on App Service pricing            |
| **Recommendation**      | Use **Static Web Apps** for frontend UI      | App Service only if frontend is complex or needs backend |

---

### 5. Analytics & Visualization: Power BI Embedded vs Stream Analytics + Event Hubs

| Factor                  | Power BI Embedded                            | Stream Analytics + Event Hubs         |
|-------------------------|----------------------------------------------|---------------------------------------|
| Purpose                 | Data visualization and dashboards            | Real-time data ingestion & stream processing |
| Use Case                | Reporting and historical trends               | Live analytics pipeline                 |
| **Recommendation**      | Use **Power BI Embedded** for dashboards     | Use Stream Analytics if real-time processing required |

---

### Summary for MVP

| Function                  | Recommended Service                        |
|---------------------------|-------------------------------------------|
| Backend Hosting           | App Service (unless container needed)    |
| Real-time Messaging       | Azure Web PubSub                          |
| NoSQL Storage             | Azure Table Storage                       |
| Frontend Hosting          | Static Web Apps                           |
| Data Visualization        | Power BI Embedded                         |


--- 

## Azure Services Process Flow

Student Device (Webcam)  
  ⬇ sends frames ⬇  

Backend API (App Service)  
  ⬇ optionally stores frames ⬇  

Azure Blob Storage  
  ⬇ sends frames for processing ⬇  

Attention Model (Azure Container Apps)  
  ⬇ generates attention scores ⬇  

Azure Table Storage (store scores)  
  ⬇ pushes live updates ⬇  

Azure Web PubSub  
  ⬇ updates dashboard ⬇  

Teacher Dashboard (Static Web Apps)  
  ⬇ visualizes trends ⬇  

Power BI Embedded  

---

**Supporting services:**  
- Azure Key Vault (secrets storage)  
- Azure Monitor (logging & health)

