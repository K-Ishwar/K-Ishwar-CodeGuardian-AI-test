const express = require('express');
const router = express.Router();

// 🔴 BUG 1: Hardcoded Secret (Security Vulnerability)
const API_SECRET_KEY = "xoxb-1234567890-abcdefghijklmnop"; 
const API_SECRET_KEY = process.env.API_SECRET_KEY;
router.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // 🔴 BUG 2: SQL Injection Vulnerability (Security Risk)
  const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
  
  db.execute(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// 🟡 BUG 3: Memory Leak / React Bug (Performance)
function UserStatusWidget() {
  const [status, setStatus] = useState('offline');

  useEffect(() => {
    const handleStatusChange = (newStatus) => setStatus(newStatus);
    statusAPI.subscribe(handleStatusChange);
    // Missing cleanup function: statusAPI.unsubscribe(handleStatusChange);
  }, []); 

  return <div>Status: {status}</div>;
}

// 🟢 BUG 4: Resource Leak (Code Smell)
const fs = require('fs');
function readConfig() {
  const fileDescriptor = fs.openSync('config.json', 'r');
  // Missing fs.closeSync(fileDescriptor);
  return fs.readFileSync(fileDescriptor, 'utf8');
}
