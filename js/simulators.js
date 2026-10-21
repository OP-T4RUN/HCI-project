/**
 * Interactive Project Simulators for Tarun Kumar Bajotra's Portfolio
 * Demonstrates real system logic for MaargAI, Traffic Classification, and Enterprise Lab
 */

const Simulators = {
  // 1. MaargAI Logistics Anomaly Detection Simulator
  logistics: {
    state: {
      route: "Mumbai Port (JNPT) -> Pune Distribution Hub",
      distanceRemainingKm: 142,
      normalSpeedKmh: 68,
      currentSpeedKmh: 68,
      plannedEtaMinutes: 135,
      actualEtaMinutes: 135,
      routeDeviationKm: 0.2,
      riskScore: 12, // 0 - 100
      riskLevel: "LOW",
      alertLog: [
        { time: "16:42:10", type: "INFO", msg: "Telemetry link synchronized with GCP Pub/Sub corridor monitor." },
        { time: "16:45:00", type: "INFO", msg: "Geofence checkpoint #3 cleared. Deviation within 0.2km tolerance." }
      ]
    },

    injectAnomaly(type) {
      const now = new Date().toLocaleTimeString('en-GB');
      if (type === 'deviation') {
        this.state.routeDeviationKm = 6.4;
        this.state.riskScore = 88;
        this.state.riskLevel = "CRITICAL";
        this.state.alertLog.unshift({
          time: now,
          type: "ALERT",
          msg: "CRITICAL: Route deviation detected! Vehicle is 6.4km outside approved corridor. Risk spike flagged."
        });
      } else if (type === 'delay') {
        this.state.currentSpeedKmh = 12;
        this.state.actualEtaMinutes += 165;
        this.state.riskScore = 65;
        this.state.riskLevel = "WARNING";
        this.state.alertLog.unshift({
          time: now,
          type: "WARN",
          msg: "WARNING: Severe deceleration (12 km/h) on Expressway. Estimated delay +165 min exceeds SLA threshold."
        });
      } else {
        // Normal
        this.state.routeDeviationKm = 0.3;
        this.state.currentSpeedKmh = 65;
        this.state.actualEtaMinutes = this.state.plannedEtaMinutes;
        this.state.riskScore = 15;
        this.state.riskLevel = "LOW";
        this.state.alertLog.unshift({
          time: now,
          type: "INFO",
          msg: "NORMAL: Telemetry re-established within nominal corridor limits. Risk score normalized to 15."
        });
      }
      this.render();
    },

    render() {
      const root = document.getElementById('logistics-sim-container');
      if (!root) return;

      const riskColor = this.state.riskLevel === 'CRITICAL' ? 'var(--color-danger)' :
                        this.state.riskLevel === 'WARNING' ? 'var(--color-warning)' : 'var(--color-success)';

      root.innerHTML = `
        <div class="sim-card glass-panel">
          <div class="sim-header">
            <div class="sim-title">
              <span class="sim-badge">LIVE SIMULATOR</span>
              <h4>MaargAI Risk Telemetry Engine</h4>
            </div>
            <div class="sim-status">
              <span class="pulse-indicator" style="background-color: ${riskColor}"></span>
              <span style="color: ${riskColor}; font-weight: 700;">${this.state.riskLevel} RISK (${this.state.riskScore}/100)</span>
            </div>
          </div>

          <div class="sim-grid">
            <div class="sim-metric-box">
              <span class="sim-label">Route</span>
              <span class="sim-val">${this.state.route}</span>
            </div>
            <div class="sim-metric-box">
              <span class="sim-label">Speed</span>
              <span class="sim-val">${this.state.currentSpeedKmh} km/h</span>
            </div>
            <div class="sim-metric-box">
              <span class="sim-label">Geofence Deviation</span>
              <span class="sim-val" style="color: ${this.state.routeDeviationKm > 2 ? 'var(--color-danger)' : 'inherit'}">
                ${this.state.routeDeviationKm.toFixed(1)} km
              </span>
            </div>
            <div class="sim-metric-box">
              <span class="sim-label">Est. Travel Time</span>
              <span class="sim-val">${this.state.actualEtaMinutes} min</span>
            </div>
          </div>

          <div class="sim-risk-meter">
            <div class="risk-bar-track">
              <div class="risk-bar-fill" style="width: ${this.state.riskScore}%; background: ${riskColor}"></div>
            </div>
          </div>

          <div class="sim-controls">
            <span class="sim-controls-label">Inject Operational Scenario:</span>
            <div class="btn-group">
              <button class="btn btn-sm btn-outline" onclick="Simulators.logistics.injectAnomaly('normal')">
                Nominal Transit
              </button>
              <button class="btn btn-sm btn-outline-warning" onclick="Simulators.logistics.injectAnomaly('delay')">
                Inject Delay Spike (+165m)
              </button>
              <button class="btn btn-sm btn-outline-danger" onclick="Simulators.logistics.injectAnomaly('deviation')">
                Inject Route Deviation (6.4km)
              </button>
            </div>
          </div>

          <div class="sim-console">
            <div class="sim-console-header">Real-Time Event Stream (PostgreSQL & Node.js Queue)</div>
            <div class="sim-console-log">
              ${this.state.alertLog.map(item => `
                <div class="log-entry log-${item.type.toLowerCase()}">
                  <span class="log-time">[${item.time}]</span>
                  <span class="log-badge ${item.type.toLowerCase()}">${item.type}</span>
                  <span class="log-msg">${item.msg}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    }
  },

  // 2. AI Network Traffic Classifier Simulator (CIC-IDS 2017)
  traffic: {
    testCases: {
      benign: {
        name: "Legitimate HTTPS Web Traffic",
        srcIp: "192.168.10.45",
        dstIp: "142.250.190.46",
        port: 443,
        proto: "TCP",
        flowDurationMs: 450,
        flowBytesSec: 18450,
        synCount: 2,
        finCount: 2,
        prediction: "BENIGN",
        confidence: "99.4%",
        threatLevel: "SAFE",
        recommendation: "Allow traffic flow; continue telemetry aggregation."
      },
      ddos: {
        name: "DDoS LOIC Flood Attack (CIC-IDS 2017)",
        srcIp: "172.16.0.12",
        dstIp: "192.168.10.50",
        port: 80,
        proto: "TCP",
        flowDurationMs: 12,
        flowBytesSec: 948200,
        synCount: 1420,
        finCount: 0,
        prediction: "MALICIOUS: DDoS-LOIC",
        confidence: "98.7%",
        threatLevel: "CRITICAL",
        recommendation: "Trigger Kafka alert-mitigation topic. Rate-limit IP & throttle incoming SYN backlog."
      },
      portscan: {
        name: "Nmap SYN Stealth PortScan",
        srcIp: "192.168.1.105",
        dstIp: "192.168.10.1",
        port: 22,
        proto: "TCP",
        flowDurationMs: 2,
        flowBytesSec: 480,
        synCount: 85,
        finCount: 0,
        prediction: "MALICIOUS: PortScan",
        confidence: "96.2%",
        threatLevel: "HIGH",
        recommendation: "Isolate reconnaissance host. Blackhole source IP across perimeter firewall."
      },
      infiltration: {
        name: "Lateral Infiltration & Privilege Escalation",
        srcIp: "192.168.10.15",
        dstIp: "192.168.10.1",
        port: 445,
        proto: "SMB",
        flowDurationMs: 1840,
        flowBytesSec: 51200,
        synCount: 14,
        finCount: 1,
        prediction: "MALICIOUS: Infiltration",
        confidence: "94.8%",
        threatLevel: "HIGH",
        recommendation: "Alert SOC tier-2 analyst; inspect Kerberos authentication tickets and Sysmon logs."
      }
    },

    current: null,

    classify(caseKey) {
      this.current = this.testCases[caseKey];
      this.render();
    },

    render() {
      const root = document.getElementById('traffic-sim-container');
      if (!root) return;

      if (!this.current) {
        this.current = this.testCases.benign;
      }

      const isSafe = this.current.threatLevel === 'SAFE';
      const statusColor = isSafe ? 'var(--color-success)' : 'var(--color-danger)';

      root.innerHTML = `
        <div class="sim-card glass-panel">
          <div class="sim-header">
            <div class="sim-title">
              <span class="sim-badge">LIVE CLASSIFIER</span>
              <h4>CIC-IDS 2017 Packet Flow Analyzer</h4>
            </div>
            <div class="sim-status">
              <span class="pulse-indicator" style="background-color: ${statusColor}"></span>
              <span style="color: ${statusColor}; font-weight: 700;">${this.current.prediction} (${this.current.confidence})</span>
            </div>
          </div>

          <div class="sim-controls">
            <span class="sim-controls-label">Inject Captured Network Flow:</span>
            <div class="btn-group">
              <button class="btn btn-sm ${this.current === this.testCases.benign ? 'btn-primary' : 'btn-outline'}"
                onclick="Simulators.traffic.classify('benign')">
                Normal HTTPS Flow
              </button>
              <button class="btn btn-sm ${this.current === this.testCases.ddos ? 'btn-danger' : 'btn-outline-danger'}"
                onclick="Simulators.traffic.classify('ddos')">
                DDoS Attack Packet
              </button>
              <button class="btn btn-sm ${this.current === this.testCases.portscan ? 'btn-warning' : 'btn-outline-warning'}"
                onclick="Simulators.traffic.classify('portscan')">
                Nmap PortScan Flow
              </button>
              <button class="btn btn-sm ${this.current === this.testCases.infiltration ? 'btn-danger' : 'btn-outline'}"
                onclick="Simulators.traffic.classify('infiltration')">
                Lateral Infiltration
              </button>
            </div>
          </div>

          <div class="sim-flow-details">
            <div class="flow-header">
              <span>Selected Packet Stream: <strong>${this.current.name}</strong></span>
              <span class="flow-tag">${this.current.proto} / Port ${this.current.port}</span>
            </div>
            <div class="flow-table-wrapper">
              <table class="flow-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Extracted Value</th>
                    <th>Model Significance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Flow 5-Tuple</td>
                    <td><code>${this.current.srcIp} -> ${this.current.dstIp} : ${this.current.port}</code></td>
                    <td>Network session key</td>
                  </tr>
                  <tr>
                    <td>Flow Duration</td>
                    <td><code>${this.current.flowDurationMs} ms</code></td>
                    <td>Burst vs sustained analysis</td>
                  </tr>
                  <tr>
                    <td>Flow Bytes / Sec</td>
                    <td><code>${this.current.flowBytesSec.toLocaleString()} B/s</code></td>
                    <td>Volumetric rate anomaly</td>
                  </tr>
                  <tr>
                    <td>SYN Flag Count</td>
                    <td><code>${this.current.synCount} flags</code></td>
                    <td>SYN flood / handshake metric</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="sim-result-box" style="border-left: 4px solid ${statusColor};">
            <div class="sim-result-title">
              <span>Decision: <strong>${this.current.prediction}</strong></span>
              <span class="badge" style="background: ${statusColor}; color: #fff;">${this.current.confidence} Confidence</span>
            </div>
            <p class="sim-result-rec"><strong>Automated Policy:</strong> ${this.current.recommendation}</p>
          </div>
        </div>
      `;
    }
  },

  // 3. Enterprise Lab & Active Directory SIEM Simulator
  enterprise: {
    activeNode: "dc",
    nodes: {
      dc: {
        title: "Domain Controller (DC01.CORP.LOCAL)",
        os: "Windows Server 2022 Datacenter",
        role: "Active Directory Domain Services, Kerberos KDC, DNS, Group Policy",
        ip: "10.0.1.10/24",
        status: "Online & Audited",
        events: [
          { id: 4624, desc: "An account was successfully logged on (Admin-TJ)", time: "16:48:02" },
          { id: 4769, desc: "A Kerberos service ticket was requested (Audited for Kerberoasting)", time: "16:49:15" },
          { id: 4672, desc: "Special privileges assigned to new logon session", time: "16:49:16" }
        ]
      },
      client: {
        title: "Workstation (WS-FIN-04)",
        os: "Windows 11 Enterprise (Joined to Domain)",
        role: "Financial Analyst Endpoint, Sysmon EDR Agent Installed",
        ip: "10.0.1.45/24",
        status: "Monitored",
        events: [
          { id: 1, desc: "Sysmon: Process created: powershell.exe -ExecutionPolicy Bypass", time: "16:47:10" },
          { id: 3, desc: "Sysmon: Network connection detected to 10.0.1.10:445", time: "16:47:12" }
        ]
      },
      kali: {
        title: "Security Audit Node (Kali-Auditor)",
        os: "Kali Linux Rolling (Audit & Emulation)",
        role: "Nmap scanning, Wireshark packet capture, threat emulation",
        ip: "10.0.2.15/24 (VLAN 20 Security Zone)",
        status: "Active Testing",
        events: [
          { id: "SEC", desc: "Nmap script scan: nmap -sV --script smb-vuln* 10.0.1.0/24", time: "16:45:00" },
          { id: "SEC", desc: "Wireshark promiscuous mode capture on eth0 active", time: "16:46:22" }
        ]
      },
      siem: {
        title: "SIEM Ingestion Server (Splunk & ELK Stack)",
        os: "Ubuntu Server 24.04 LTS",
        role: "Centralized Syslog, Winlogbeat collector, Kibana Dashboard, Splunk SPL Engine",
        ip: "10.0.3.50/24",
        status: "Real-Time Ingestion (9.2k eps)",
        events: [
          { id: "SPLUNK", desc: "SPL Alert: 'Unusual spike in Kerberos RC4-HMAC ticket requests' (Threshold: 5)", time: "16:49:18" },
          { id: "ELK", desc: "Elasticsearch index 'winlogbeat-7.17-2026.10' indexed 4,210 docs in last min", time: "16:49:30" }
        ]
      }
    },

    selectNode(nodeKey) {
      this.activeNode = nodeKey;
      this.render();
    },

    render() {
      const root = document.getElementById('enterprise-sim-container');
      if (!root) return;

      const n = this.nodes[this.activeNode];

      root.innerHTML = `
        <div class="sim-card glass-panel">
          <div class="sim-header">
            <div class="sim-title">
              <span class="sim-badge">VIRTUALIZED LAB TOPOLOGY</span>
              <h4>Enterprise Active Directory & SIEM Environment</h4>
            </div>
            <div class="sim-status">
              <span class="pulse-indicator" style="background-color: var(--color-cyan)"></span>
              <span style="color: var(--color-cyan); font-weight: 700;">Subnet 10.0.0.0/16 Virtualized</span>
            </div>
          </div>

          <div class="topology-nav">
            <button class="topo-btn ${this.activeNode === 'dc' ? 'active' : ''}" onclick="Simulators.enterprise.selectNode('dc')">
              <span class="topo-icon">🖥️</span>
              <span class="topo-name">Domain Controller</span>
            </button>
            <button class="topo-btn ${this.activeNode === 'client' ? 'active' : ''}" onclick="Simulators.enterprise.selectNode('client')">
              <span class="topo-icon">💻</span>
              <span class="topo-name">Windows 11 Client</span>
            </button>
            <button class="topo-btn ${this.activeNode === 'kali' ? 'active' : ''}" onclick="Simulators.enterprise.selectNode('kali')">
              <span class="topo-icon">🐉</span>
              <span class="topo-name">Kali Linux Node</span>
            </button>
            <button class="topo-btn ${this.activeNode === 'siem' ? 'active' : ''}" onclick="Simulators.enterprise.selectNode('siem')">
              <span class="topo-icon">📊</span>
              <span class="topo-name">Splunk & ELK SIEM</span>
            </button>
          </div>

          <div class="node-detail-panel">
            <div class="node-detail-header">
              <h5>${n.title}</h5>
              <span class="badge badge-outline">${n.status}</span>
            </div>
            <div class="node-specs">
              <div><strong>Operating System:</strong> ${n.os}</div>
              <div><strong>IP Address:</strong> <code>${n.ip}</code></div>
              <div><strong>Primary Function:</strong> ${n.role}</div>
            </div>

            <div class="node-logs">
              <div class="node-logs-title">Recent Event Telemetry Forwarded to SIEM:</div>
              <ul class="event-list">
                ${n.events.map(ev => `
                  <li class="event-item">
                    <span class="event-time">${ev.time}</span>
                    <span class="event-id">[ID: ${ev.id}]</span>
                    <span class="event-text">${ev.desc}</span>
                  </li>
                `).join('')}
              </ul>
            </div>
          </div>
        </div>
      `;
    }
  },

  initAll() {
    this.logistics.render();
    this.traffic.render();
    this.enterprise.render();
  }
};

window.Simulators = Simulators;
