// =============================================================================
// SCHEMA
// =============================================================================

const MONTHS = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December'
];

const EXPENSE_CATS = [
  {
    id: 'housing', label: 'Housing & Utilities', icon: '🏠',
    color: '#2a78d6', group: 'needs',
    items: [
      { id: 'mortgageRent',         label: 'Mortgage & Rent' },
      { id: 'maintenanceFees',      label: 'Maintenance Fees' },
      { id: 'electricity',          label: 'Electricity' },
      { id: 'gas',                  label: 'Gas' },
      { id: 'waterSewerWaste',      label: 'Water, Sewer & Waste' },
      { id: 'phone',                label: 'Phone' },
      { id: 'internet',             label: 'Internet' },
      { id: 'furnishingAppliances', label: 'Furnishing & Appliances' },
      { id: 'lawnGarden',           label: 'Lawn & Garden' },
      { id: 'homeImprovements',     label: 'Home Improvements' },
    ]
  },
  {
    id: 'transportation', label: 'Transportation', icon: '🚗',
    color: '#1baf7a', group: 'needs',
    items: [
      { id: 'carMotorcycle',      label: 'Car & Motorcycle' },
      { id: 'fuel',               label: 'Fuel' },
      { id: 'tollsParking',       label: 'Tolls & Parking' },
      { id: 'publicTransport',    label: 'Public Transport' },
      { id: 'repairsMaintenance', label: 'Repairs & Maintenance' },
    ]
  },
  {
    id: 'dailyLiving', label: 'Daily Living', icon: '🛒',
    color: '#eb6834', group: 'needs',
    items: [
      { id: 'groceries',        label: 'Groceries' },
      { id: 'childcare',        label: 'Childcare' },
      { id: 'cleaningLaundry',  label: 'Cleaning & Laundry' },
      { id: 'clothing',         label: 'Clothing' },
      { id: 'personalGrooming', label: 'Personal Grooming' },
      { id: 'diningOut',        label: 'Dining Out' },
      { id: 'schoolAllowance',  label: 'School Allowance' },
    ]
  },
  {
    id: 'lifestyle', label: 'Lifestyle & Entertainment', icon: '🎮',
    color: '#e87ba4', group: 'wants',
    items: [
      { id: 'digitalSubscriptions', label: 'Digital Subscriptions' },
      { id: 'nonEssentialShopping', label: 'Non-Essential Shopping' },
      { id: 'hobbies',              label: 'Hobbies' },
      { id: 'eventsActivities',     label: 'Events & Activities' },
    ]
  },
  {
    id: 'health', label: 'Health', icon: '🏥',
    color: '#4a3aa7', group: 'needs',
    items: [
      { id: 'lifeTakaful',           label: 'Life Takaful' },
      { id: 'medicalTakaful',        label: 'Medical Takaful' },
      { id: 'medicationSupplements', label: 'Medication & Supplements' },
      { id: 'doctorVisits',          label: 'Doctor Visits' },
      { id: 'dentalOptical',         label: 'Dental & Optical' },
      { id: 'sportsWellness',        label: 'Sports, Wellness & Fitness' },
    ]
  },
  {
    id: 'education', label: 'Education', icon: '📚',
    color: '#c98500', group: 'needs',
    items: [
      { id: 'schoolFeesTuition',     label: 'School Fees & Tuition' },
      { id: 'coursesCertifications', label: 'Courses & Certifications' },
      { id: 'learningPlatforms',     label: 'Learning Platforms' },
      { id: 'booksMaterials',        label: 'Books & Materials' },
      { id: 'schoolTransport',       label: 'School Transport' },
      { id: 'skillsEnrichment',      label: 'Skills & Enrichment' },
    ]
  },
  {
    id: 'giving', label: 'Giving', icon: '🤲',
    color: '#008300', group: 'giving',
    items: [
      { id: 'spouse',         label: 'Spouse' },
      { id: 'parentsInLaws',  label: 'Parents & In-Laws Support' },
      { id: 'zakat',          label: 'Zakat' },
      { id: 'giftsDonations', label: 'Gifts & Donations' },
    ]
  },
  {
    id: 'travel', label: 'Travel & Vacation', icon: '✈️',
    color: '#e34948', group: 'wants',
    items: [
      { id: 'airfare',       label: 'Airfare' },
      { id: 'accommodation', label: 'Accommodation' },
      { id: 'foodDining',    label: 'Food & Dining' },
      { id: 'souvenirs',     label: 'Souvenirs' },
      { id: 'petBoarding',   label: 'Pet Boarding' },
      { id: 'carRental',     label: 'Car Rental' },
    ]
  },
  {
    id: 'contingencies', label: 'Contingencies', icon: '⚠️',
    color: '#e34948', group: 'contingencies',
    items: [
      { id: 'emergencyExpenses', label: 'Emergency Expenses' },
    ]
  },
];

const INCOME_ITEMS = [
  { id: 'salary',         label: 'Salary' },
  { id: 'dividends',      label: 'Dividends' },
  { id: 'rentalIncome',   label: 'Rental Income' },
  { id: 'businessIncome', label: 'Business Income' },
  { id: 'irregular',      label: 'Irregular (Bonuses, Gifts)' },
  { id: 'capitalGains',   label: 'Capital Gains' },
  { id: 'transfers',      label: 'Transfers' },
];

const SAVINGS_ITEMS = [
  { id: 'emergencyFund',   label: 'Emergency Fund' },
  { id: 'retirementFund',  label: 'Retirement Fund' },
  { id: 'investments',     label: 'Investments' },
  { id: 'festiveFund',     label: 'Festive Fund (Eid, Qurban)' },
  { id: 'hajjFund',        label: 'Hajj Fund' },
  { id: 'autoTakaful',     label: 'Auto Takaful' },
  { id: 'homeTakaful',     label: 'Home Takaful' },
  { id: 'propertyTaxFund', label: 'Property Tax Fund' },
  { id: 'educationFund',   label: 'Education Fund' },
  { id: 'bufferFund',      label: 'Buffer Fund' },
  { id: 'otherSavings',    label: 'Other Savings' },
];

const DIST_GROUPS = [
  { key: 'needs',         label: 'Needs',          cats: ['housing','transportation','dailyLiving','health','education'] },
  { key: 'giving',        label: 'Giving',          cats: ['giving'] },
  { key: 'savings',       label: 'Savings & Inv.',  cats: null },
  { key: 'wants',         label: 'Wants',           cats: ['lifestyle','travel'] },
  { key: 'contingencies', label: 'Contingencies',   cats: ['contingencies'] },
  { key: 'balance',       label: 'Balance',         cats: null },
];

const DIST_COLORS_LIGHT = ['#2a78d6','#eb6834','#1baf7a','#eda100','#e87ba4','#008300'];
const DIST_COLORS_DARK  = ['#3987e5','#d95926','#199e70','#c98500','#d55181','#009900'];

const LEFT_CATS  = ['housing','transportation','dailyLiving','lifestyle','contingencies'];
const RIGHT_CATS = ['health','education','giving','travel'];

// =============================================================================
// STATE
// =============================================================================

const st = {
  year: 0, month: 0,
  data: {},
  charts: null,
  user: null,
};

function key(y, m) { return `${y}-${String(m).padStart(2,'0')}`; }
function curKey()  { return key(st.year, st.month); }

function emptyMonth() {
  const d = { income: {}, expenses: {}, savings: {}, transactions: [] };
  INCOME_ITEMS.forEach(it => { d.income[it.id] = { p: 0, a: 0 }; });
  EXPENSE_CATS.forEach(cat => {
    d.expenses[cat.id] = {};
    cat.items.forEach(it => { d.expenses[cat.id][it.id] = { b: 0, a: 0 }; });
  });
  SAVINGS_ITEMS.forEach(it => { d.savings[it.id] = { p: 0, a: 0, goal: 0 }; });
  return d;
}

function curData() {
  if (!st.data[curKey()]) st.data[curKey()] = emptyMonth();
  return st.data[curKey()];
}

// =============================================================================
// CALCULATIONS
// =============================================================================

function numv(x) { return parseFloat(x) || 0; }

function computeActuals() {
  const d = curData();
  if (!d.transactions || d.transactions.length === 0) return;

  EXPENSE_CATS.forEach(cat => {
    cat.items.forEach(it => { d.expenses[cat.id][it.id].a = 0; });
  });
  INCOME_ITEMS.forEach(it => { d.income[it.id].a = 0; });
  SAVINGS_ITEMS.forEach(it => { d.savings[it.id].a = 0; });

  d.transactions.forEach(tx => {
    const amt = numv(tx.amount);
    if (tx.type === 'expense') {
      if (d.expenses[tx.catId]?.[tx.itemId] !== undefined) {
        d.expenses[tx.catId][tx.itemId].a += amt;
      }
    } else if (tx.type === 'income') {
      if (d.income[tx.itemId] !== undefined) {
        d.income[tx.itemId].a += amt;
      }
    } else if (tx.type === 'savings') {
      if (d.savings[tx.itemId] !== undefined) {
        d.savings[tx.itemId].a += amt;
      }
    }
  });
}

function calcAccumulated(itemId) {
  const ck = curKey();
  return Object.entries(st.data).reduce((total, [k, data]) => {
    if (k >= ck) return total;
    return total + numv(data.savings?.[itemId]?.a);
  }, 0);
}

function calcAllAccumulated() {
  return SAVINGS_ITEMS.reduce((s, it) => s + calcAccumulated(it.id), 0);
}

function catSum(catId, field) {
  const cat = EXPENSE_CATS.find(c => c.id === catId);
  const d = curData();
  return cat.items.reduce((s, it) => s + numv(d.expenses[catId][it.id][field]), 0);
}

function expSum(field) {
  return EXPENSE_CATS.reduce((s, cat) => s + catSum(cat.id, field), 0);
}

function incSum(field) {
  const d = curData();
  return INCOME_ITEMS.reduce((s, it) => s + numv(d.income[it.id][field]), 0);
}

function savSum(field) {
  const d = curData();
  return SAVINGS_ITEMS.reduce((s, it) => s + numv(d.savings[it.id][field]), 0);
}

function summary() {
  const ip = incSum('p'), ia = incSum('a');
  const ep = expSum('b'), ea = expSum('a');
  const sp = savSum('p'), sa = savSum('a');
  return { ip, ia, ep, ea, sp, sa, np: ip-ep-sp, na: ia-ea-sa };
}

function distribution() {
  const sa = savSum('a');
  const na = summary().na;
  const res = {};
  DIST_GROUPS.forEach(g => {
    if (g.cats) res[g.key] = g.cats.reduce((s, cid) => s + catSum(cid, 'a'), 0);
  });
  res.savings = sa;
  res.balance = Math.max(0, na);
  return res;
}

// =============================================================================
// TRANSACTIONS
// =============================================================================

function addTransaction(tx) {
  const d = curData();
  if (!d.transactions) d.transactions = [];
  d.transactions.push(tx);
  computeActuals();
  updateDerived();
  buildLogPage();
}

function deleteTransaction(id) {
  const d = curData();
  if (!d.transactions) return;
  d.transactions = d.transactions.filter(tx => tx.id !== id);
  computeActuals();
  updateDerived();
  buildLogPage();
}

function txLabel(tx) {
  if (tx.type === 'income') {
    const item = INCOME_ITEMS.find(it => it.id === tx.itemId);
    return { icon: '💰', cat: 'Income', item: item?.label || tx.itemId };
  }
  if (tx.type === 'savings') {
    const item = SAVINGS_ITEMS.find(it => it.id === tx.itemId);
    return { icon: '🏦', cat: 'Savings', item: item?.label || tx.itemId };
  }
  const cat = EXPENSE_CATS.find(c => c.id === tx.catId);
  const item = cat?.items.find(it => it.id === tx.itemId);
  return { icon: cat?.icon || '💸', cat: cat?.label || tx.catId, item: item?.label || tx.itemId };
}

function formatTxDate(dateStr) {
  if (!dateStr) return '';
  const [y, m, d] = dateStr.split('-');
  const mon = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return `${parseInt(d)} ${mon[parseInt(m)-1]} ${y}`;
}

// =============================================================================
// STORAGE
// =============================================================================

let saveTimer = null;

function scheduleSave() {
  setSyncDot('pending');
  clearTimeout(saveTimer);
  saveTimer = setTimeout(doSave, 1500);
}

async function doSave() {
  if (FIREBASE_ENABLED && st.user) {
    await saveToCloud();
  } else {
    saveLocal();
    setSyncDot('saved');
  }
}

function saveLocal() {
  localStorage.setItem('budgetje_d', JSON.stringify(st.data));
}

function loadLocal() {
  try {
    const raw = localStorage.getItem('budgetje_d');
    if (raw) st.data = JSON.parse(raw);
  } catch(e) { st.data = {}; }
}

async function saveToCloud() {
  if (!st.user) return;
  try {
    setSyncDot('saving');
    const db = firebase.firestore();
    await db.collection('users').doc(st.user.uid)
            .collection('months').doc(curKey())
            .set(curData());
    setSyncDot('saved');
  } catch(e) {
    console.error('Save error:', e);
    setSyncDot('error');
    toast('Sync failed — saved locally');
    saveLocal();
  }
}

async function loadFromCloud() {
  if (!st.user) return;
  showLoading(true);
  try {
    const db = firebase.firestore();
    const snap = await db.collection('users').doc(st.user.uid)
                         .collection('months').get();
    st.data = {};
    snap.forEach(doc => { st.data[doc.id] = doc.data(); });
    setSyncDot('saved');
  } catch(e) {
    console.error('Load error:', e);
    setSyncDot('error');
    loadLocal();
  }
  showLoading(false);
  buildBudgetPage();
  buildLogPage();
  computeActuals();
  updateDerived();
  setTimeout(initCharts, 60);
}

async function deleteMonthFromCloud(k) {
  if (!st.user) return;
  try {
    const db = firebase.firestore();
    await db.collection('users').doc(st.user.uid)
            .collection('months').doc(k).delete();
  } catch(e) { console.error('Delete error:', e); }
}

function savePrefs() {
  localStorage.setItem('budgetje_p', JSON.stringify({ theme: document.documentElement.dataset.theme }));
}

function loadPrefs() {
  try {
    const p = JSON.parse(localStorage.getItem('budgetje_p') || '{}');
    if (p.theme) document.documentElement.dataset.theme = p.theme;
  } catch(e) {}
}

// =============================================================================
// AUTH
// =============================================================================

function initAuth() {
  if (!FIREBASE_ENABLED) {
    showLoginScreen(false);
    loadLocal();
    buildBudgetPage();
    buildLogPage();
    computeActuals();
    updateDerived();
    setTimeout(initCharts, 60);
    return;
  }

  document.getElementById('localModeNote').style.display = 'block';

  const auth = firebase.auth();

  auth.onAuthStateChanged(user => {
    if (user) {
      st.user = user;
      showLoginScreen(false);
      updateUserInfo(user);
      document.getElementById('userInfo').style.display = 'flex';
      document.getElementById('syncDot').classList.add('visible');
      loadFromCloud();
    } else {
      st.user = null;
      st.data = {};
      document.getElementById('userInfo').style.display = 'none';
      document.getElementById('syncDot').classList.remove('visible');
      showLoginScreen(true);
    }
  });

  document.getElementById('btnGoogleSignIn').addEventListener('click', () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).catch(e => {
      console.error(e);
      toast('Sign-in failed — try again');
    });
  });

  document.getElementById('btnSignOut').addEventListener('click', () => {
    if (!confirm('Sign out?')) return;
    firebase.auth().signOut();
  });

  document.getElementById('btnLocalMode').addEventListener('click', e => {
    e.preventDefault();
    showLoginScreen(false);
    loadLocal();
    buildBudgetPage();
    buildLogPage();
    computeActuals();
    updateDerived();
    setTimeout(initCharts, 60);
  });
}

function showLoginScreen(show) {
  document.getElementById('loginScreen').style.display = show ? 'flex' : 'none';
}

function updateUserInfo(user) {
  const avatar = document.getElementById('userAvatar');
  if (!avatar) return;
  if (user.photoURL) {
    avatar.innerHTML = `<img src="${user.photoURL}" alt="">`;
  } else {
    avatar.textContent = (user.displayName || user.email || '?')[0].toUpperCase();
  }
}

// =============================================================================
// UI HELPERS
// =============================================================================

function setSyncDot(status) {
  const el = document.getElementById('syncDot');
  if (!el) return;
  el.className = `sync-dot visible sync-${status}`;
}

function showLoading(show) {
  document.querySelectorAll('.ni').forEach(el => el.disabled = show);
}

function fmt(n) {
  return numv(n).toLocaleString('en-MY', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function fmtVar(val) {
  if (val > 0) return { t: fmt(val), cls: 'vp' };
  if (val < 0) return { t: fmt(val), cls: 'vn' };
  return { t: '—', cls: 'vz' };
}

function isLight(hex) {
  const r = parseInt(hex.slice(1,3),16);
  const g = parseInt(hex.slice(3,5),16);
  const b = parseInt(hex.slice(5,7),16);
  return (0.299*r + 0.587*g + 0.114*b) / 255 > 0.52;
}

function setEl(id, text, color) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = text;
  if (color !== undefined) el.style.color = color;
}

// =============================================================================
// DOM BUILDERS (Budget page)
// =============================================================================

function buildExpenseCat(cat) {
  const d = curData();
  const textCol = isLight(cat.color) ? '#0b0b0b' : '#ffffff';

  const section = document.createElement('div');
  section.className = 'cat-section';

  const rows = cat.items.map(it => {
    const b = numv(d.expenses[cat.id][it.id].b) || '';
    return `<tr>
      <td><span class="item-label">${it.label}</span></td>
      <td><input type="number" class="ni" data-t="exp" data-c="${cat.id}" data-i="${it.id}" data-f="b" value="${b}" placeholder="0.00" min="0" step="0.01" inputmode="decimal"></td>
      <td class="acc-ro" id="ea_${cat.id}_${it.id}">0.00</td>
      <td class="vc" id="v_${cat.id}_${it.id}"></td>
    </tr>`;
  }).join('');

  section.innerHTML = `
    <div class="cat-header" style="background:${cat.color};color:${textCol}">
      <span>${cat.icon}</span>
      <span class="cat-header-label">${cat.label}</span>
      <span class="cat-header-right">
        <span class="cat-preview-total" id="cpt_${cat.id}"></span>
        <span class="cat-chevron">▾</span>
      </span>
    </div>
    <table class="cat-table">
      <thead><tr>
        <th>Item</th><th>Budgeted</th><th>Actual</th><th>Variance</th>
      </tr></thead>
      <tbody>${rows}</tbody>
    </table>
    <div class="cat-total">
      <span class="ct-label">Total</span>
      <div class="ct-vals">
        <span id="ct_${cat.id}_b">0.00</span>
        <span class="ct-sep">|</span>
        <span id="ct_${cat.id}_a">0.00</span>
        <span class="ct-sep">|</span>
        <span class="vc" id="ct_${cat.id}_v"></span>
      </div>
    </div>`;

  return section;
}

function buildIncome() {
  const d = curData();
  const rows = INCOME_ITEMS.map(it => {
    const p = numv(d.income[it.id].p) || '';
    return `<tr>
      <td><span class="item-label">${it.label}</span></td>
      <td><input type="number" class="ni" data-t="inc" data-i="${it.id}" data-f="p" value="${p}" placeholder="0.00" min="0" step="0.01" inputmode="decimal"></td>
      <td class="acc-ro" id="ia_${it.id}">0.00</td>
    </tr>`;
  }).join('');

  return `<div class="sb-section">
    <div class="sb-header"><span>💰</span><span>Income</span></div>
    <table class="cat-table">
      <thead><tr><th>Source</th><th>Projected</th><th>Actual</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>
    <div class="cat-total">
      <span class="ct-label">Total</span>
      <div class="ct-vals">
        <span id="inc_tp">0.00</span>
        <span class="ct-sep">|</span>
        <span id="inc_ta">0.00</span>
      </div>
    </div>
  </div>`;
}

function buildSavings() {
  const d = curData();
  const rows = SAVINGS_ITEMS.map(it => {
    const sv = d.savings[it.id];
    const p  = numv(sv.p)    || '';
    const g  = numv(sv.goal) || '';
    return `<tr>
      <td><span class="item-label">${it.label}</span></td>
      <td><input type="number" class="ni ni-xs" data-t="sav" data-i="${it.id}" data-f="p"    value="${p}" placeholder="0" min="0" step="0.01" inputmode="decimal"></td>
      <td class="acc-ro" id="sa_${it.id}">0.00</td>
      <td class="acc-ro" id="acc_${it.id}">0.00</td>
      <td><input type="number" class="ni ni-xs" data-t="sav" data-i="${it.id}" data-f="goal" value="${g}" placeholder="0" min="0" step="0.01" inputmode="decimal"></td>
    </tr>`;
  }).join('');

  return `<div class="sb-section">
    <div class="sb-header"><span>🏦</span><span>Savings &amp; Investment</span></div>
    <div class="sav-scroll"><table class="cat-table">
      <thead><tr>
        <th>Fund</th><th>Plan.</th><th>Act.</th><th>Accum.</th><th>Goal</th>
      </tr></thead>
      <tbody>${rows}</tbody>
    </table></div>
    <div class="cat-total">
      <span class="ct-label">Total</span>
      <div class="ct-vals">
        <span id="sav_tp">0.00</span>
        <span class="ct-sep">|</span>
        <span id="sav_ta">0.00</span>
        <span class="ct-sep">|</span>
        <span id="sav_tacc">0.00</span>
        <span class="ct-sep">|</span>
        <span id="sav_tgoal">0.00</span>
      </div>
    </div>
  </div>`;
}

function buildSummary() {
  return `<div class="sb-section">
    <div class="sb-header"><span>📊</span><span>Budget Summary</span></div>
    <table class="sum-table">
      <thead><tr>
        <th>Category</th><th>Projected</th><th>Actual</th><th>Diff</th>
      </tr></thead>
      <tbody>
        <tr><td>Income</td>  <td id="sum_ip">0.00</td><td id="sum_ia">0.00</td><td id="sum_id">0.00</td></tr>
        <tr><td>Expenses</td><td id="sum_ep">0.00</td><td id="sum_ea">0.00</td><td id="sum_ed">0.00</td></tr>
        <tr><td>Savings</td> <td id="sum_sp">0.00</td><td id="sum_sa">0.00</td><td>—</td></tr>
        <tr><td>Net Balance</td><td id="sum_np">0.00</td><td id="sum_na">0.00</td><td></td></tr>
      </tbody>
    </table>
  </div>`;
}

// =============================================================================
// PAGE BUILDERS
// =============================================================================

function buildBudgetPage() {
  const colL = document.getElementById('colLeft');
  const colR = document.getElementById('colRight');
  colL.innerHTML = '';
  colR.innerHTML = '';

  LEFT_CATS.forEach(cid => {
    const cat = EXPENSE_CATS.find(c => c.id === cid);
    if (cat) colL.appendChild(buildExpenseCat(cat));
  });
  RIGHT_CATS.forEach(cid => {
    const cat = EXPENSE_CATS.find(c => c.id === cid);
    if (cat) colR.appendChild(buildExpenseCat(cat));
  });

  document.getElementById('incomeSection').innerHTML  = buildIncome();
  document.getElementById('savingsSection').innerHTML = buildSavings();
  document.getElementById('summarySection').innerHTML = buildSummary();

  initCollapsible();
}

function buildLogPage() {
  const d = curData();
  const txs = (d.transactions || []).slice().sort((a, b) =>
    (b.date + b.time).localeCompare(a.date + a.time)
  );

  const countEl = document.getElementById('logCount');
  if (countEl) countEl.textContent = txs.length;

  const list = document.getElementById('logList');
  if (!list) return;

  if (txs.length === 0) {
    list.innerHTML = '<div class="log-empty">No transactions this month.<br>Add one from the Home tab.</div>';
    return;
  }

  list.innerHTML = txs.map(tx => {
    const { icon, cat, item } = txLabel(tx);
    const amtClass = tx.type === 'income' ? 'log-inc' : tx.type === 'savings' ? 'log-sav' : 'log-exp';
    const sign = tx.type === 'income' ? '+' : '−';
    const dateStr = formatTxDate(tx.date);
    const noteStr = tx.note ? ` · ${tx.note}` : '';
    return `<div class="log-item">
      <div class="log-icon">${icon}</div>
      <div class="log-info">
        <div class="log-title">${cat} · ${item}</div>
        <div class="log-meta">${dateStr} ${tx.time}${noteStr}</div>
      </div>
      <div class="log-amount ${amtClass}">${sign}RM&nbsp;${fmt(tx.amount)}</div>
      <button class="log-delete" data-id="${tx.id}" title="Delete">×</button>
    </div>`;
  }).join('');

  list.querySelectorAll('.log-delete').forEach(btn => {
    btn.addEventListener('click', () => {
      if (confirm('Delete this entry?')) deleteTransaction(btn.dataset.id);
    });
  });
}

function switchPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.bnav-tab').forEach(t => t.classList.remove('active'));

  const pageId = 'page' + name.charAt(0).toUpperCase() + name.slice(1);
  document.getElementById(pageId)?.classList.add('active');
  document.querySelector(`.bnav-tab[data-page="${name}"]`)?.classList.add('active');

  // Budget-only header buttons
  document.querySelectorAll('.budget-only').forEach(el => {
    el.style.display = name === 'budget' ? 'inline-flex' : 'none';
  });

  if (name === 'log') buildLogPage();

  if (name === 'home' && st.charts) {
    setTimeout(() => Object.values(st.charts).forEach(c => c?.update()), 50);
  }
}

function initCollapsible() {
  if (window.innerWidth >= 768) return;
  document.querySelectorAll('.cat-section').forEach(section => {
    section.classList.add('collapsed');
    const header = section.querySelector('.cat-header');
    header.addEventListener('click', () => section.classList.toggle('collapsed'));
  });
}

// =============================================================================
// ENTRY FORM
// =============================================================================

let entryType = 'expense';

function initEntryForm() {
  // Default date = today
  const now = new Date();
  const todayStr = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
  document.getElementById('entryDate').value = todayStr;

  // Type tabs
  document.querySelectorAll('.type-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      entryType = tab.dataset.type;
      document.querySelectorAll('.type-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      updateEntrySelects();
    });
  });

  // Category → update items
  document.getElementById('entryCat').addEventListener('change', updateEntryItems);

  // Submit
  document.getElementById('btnAddEntry').addEventListener('click', submitEntry);

  // Allow Enter key on note field to submit
  document.getElementById('entryNote').addEventListener('keydown', e => {
    if (e.key === 'Enter') submitEntry();
  });

  updateEntrySelects();
}

function updateEntrySelects() {
  const catSel  = document.getElementById('entryCat');
  const itemSel = document.getElementById('entryItem');

  if (entryType === 'expense') {
    catSel.style.display = '';
    catSel.innerHTML = EXPENSE_CATS.map(cat =>
      `<option value="${cat.id}">${cat.icon} ${cat.label}</option>`
    ).join('');
    updateEntryItems();
  } else if (entryType === 'income') {
    catSel.style.display = 'none';
    itemSel.innerHTML = INCOME_ITEMS.map(it =>
      `<option value="${it.id}">${it.label}</option>`
    ).join('');
  } else {
    catSel.style.display = 'none';
    itemSel.innerHTML = SAVINGS_ITEMS.map(it =>
      `<option value="${it.id}">${it.label}</option>`
    ).join('');
  }
}

function updateEntryItems() {
  if (entryType !== 'expense') return;
  const catId = document.getElementById('entryCat').value;
  const cat   = EXPENSE_CATS.find(c => c.id === catId);
  if (!cat) return;
  document.getElementById('entryItem').innerHTML = cat.items.map(it =>
    `<option value="${it.id}">${it.label}</option>`
  ).join('');
}

function submitEntry() {
  const amountRaw = document.getElementById('entryAmount').value;
  const amount = parseFloat(amountRaw);
  if (!amount || amount <= 0) { toast('Enter a valid amount'); return; }

  const now    = new Date();
  const dateEl = document.getElementById('entryDate');
  const dateVal = dateEl.value || `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
  const timeVal = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;

  const catId  = entryType === 'expense' ? document.getElementById('entryCat').value : entryType;
  const itemId = document.getElementById('entryItem').value;

  const tx = {
    id:     'tx_' + now.getTime().toString(36) + '_' + Math.random().toString(36).slice(2, 7),
    date:   dateVal,
    time:   timeVal,
    type:   entryType,
    catId:  catId,
    itemId: itemId,
    amount: amount,
    note:   document.getElementById('entryNote').value.trim(),
  };

  addTransaction(tx);
  scheduleSave();

  document.getElementById('entryAmount').value = '';
  document.getElementById('entryNote').value   = '';
  document.getElementById('entryAmount').focus();

  toast(`Added RM ${fmt(amount)} ✓`);
}

// =============================================================================
// DERIVED VALUE UPDATES
// =============================================================================

function updateDerived() {
  computeActuals();

  const d = curData();

  // Expense category rows + totals
  EXPENSE_CATS.forEach(cat => {
    let tb = 0, ta = 0;
    cat.items.forEach(it => {
      const b = numv(d.expenses[cat.id][it.id].b);
      const a = numv(d.expenses[cat.id][it.id].a);
      tb += b; ta += a;
      setEl(`ea_${cat.id}_${it.id}`, fmt(a));
      const vEl = document.getElementById(`v_${cat.id}_${it.id}`);
      if (vEl) {
        const { t, cls } = fmtVar(b - a);
        vEl.textContent = t; vEl.className = `vc ${cls}`;
      }
    });
    setEl(`ct_${cat.id}_b`, fmt(tb));
    setEl(`ct_${cat.id}_a`, fmt(ta));
    const vtEl = document.getElementById(`ct_${cat.id}_v`);
    if (vtEl) {
      const { t, cls } = fmtVar(tb - ta);
      vtEl.textContent = t; vtEl.className = `vc ${cls}`;
    }
    const ptEl = document.getElementById(`cpt_${cat.id}`);
    if (ptEl) ptEl.textContent = ta > 0 ? `RM ${fmt(ta)}` : '';
  });

  // Income
  INCOME_ITEMS.forEach(it => setEl(`ia_${it.id}`, fmt(numv(d.income[it.id].a))));
  setEl('inc_tp', fmt(incSum('p')));
  setEl('inc_ta', fmt(incSum('a')));

  // Savings
  SAVINGS_ITEMS.forEach(it => {
    setEl(`sa_${it.id}`,  fmt(numv(d.savings[it.id].a)));
    setEl(`acc_${it.id}`, fmt(calcAccumulated(it.id)));
  });
  setEl('sav_tp',   fmt(savSum('p')));
  setEl('sav_ta',   fmt(savSum('a')));
  setEl('sav_tacc', fmt(calcAllAccumulated()));
  setEl('sav_tgoal',fmt(savSum('goal')));

  // Summary
  const s = summary();
  const idiff = s.ia - s.ip;
  const ediff = s.ea - s.ep;
  setEl('sum_ip', fmt(s.ip));
  setEl('sum_ia', fmt(s.ia));
  setEl('sum_id', fmt(idiff), idiff >= 0 ? 'var(--good)' : 'var(--bad)');
  setEl('sum_ep', fmt(s.ep));
  setEl('sum_ea', fmt(s.ea));
  setEl('sum_ed', fmt(ediff), ediff > 0 ? 'var(--bad)' : ediff < 0 ? 'var(--good)' : '');
  setEl('sum_sp', fmt(s.sp));
  setEl('sum_sa', fmt(s.sa));
  setEl('sum_np', fmt(s.np), s.np >= 0 ? 'var(--good)' : 'var(--bad)');
  setEl('sum_na', fmt(s.na), s.na >= 0 ? 'var(--good)' : 'var(--bad)');

  // Stat tiles (Home page)
  setEl('tile_ia', `RM ${fmt(s.ia)}`);
  setEl('tile_ea', `RM ${fmt(s.ea)}`);
  setEl('tile_sa', `RM ${fmt(s.sa)}`);
  const naEl = document.getElementById('tile_na');
  if (naEl) {
    naEl.textContent = `RM ${fmt(s.na)}`;
    naEl.style.color = s.na >= 0 ? 'var(--good)' : 'var(--bad)';
  }

  updateCharts();
  scheduleSave();
}

// =============================================================================
// CHARTS
// =============================================================================

function chartColors() {
  const dark = document.documentElement.dataset.theme === 'dark';
  return {
    s1: dark ? '#3987e5' : '#2a78d6',
    s2: dark ? '#d95926' : '#eb6834',
    surface: dark ? '#1a1a19' : '#fcfcfb',
    textsec: dark ? '#c3c2b7' : '#52514e',
    muted: '#898781',
    grid: dark ? '#2c2c2a' : '#e1e0d9',
    dist: dark ? DIST_COLORS_DARK : DIST_COLORS_LIGHT,
  };
}

function initCharts() {
  if (st.charts) Object.values(st.charts).forEach(c => c?.destroy());
  const c = chartColors();
  const shared = { responsive: true, maintainAspectRatio: false, animation: { duration: 300 } };

  st.charts = {};

  st.charts.pa = new Chart(document.getElementById('chartPA'), {
    type: 'bar',
    data: {
      labels: ['Income', 'Expenses', 'Savings'],
      datasets: [
        { label: 'Projected', data: [0,0,0], backgroundColor: c.s1, borderRadius: 4, borderSkipped: false },
        { label: 'Actual',    data: [0,0,0], backgroundColor: c.s2, borderRadius: 4, borderSkipped: false },
      ]
    },
    options: {
      ...shared,
      plugins: {
        legend: { position: 'bottom', labels: { color: c.textsec, font: { size: 11 }, boxWidth: 12, padding: 10 } },
        tooltip: { callbacks: { label: ctx => ` ${ctx.dataset.label}: RM ${ctx.parsed.y.toLocaleString('en-MY',{minimumFractionDigits:2})}` } },
      },
      scales: {
        x: { ticks: { color: c.muted, font: { size: 11 } }, grid: { color: c.grid } },
        y: { ticks: { color: c.muted, font: { size: 10 }, callback: v => 'RM '+v.toLocaleString('en-MY') }, grid: { color: c.grid } }
      }
    }
  });

  st.charts.dist = new Chart(document.getElementById('chartDist'), {
    type: 'doughnut',
    data: {
      labels: DIST_GROUPS.map(g => g.label),
      datasets: [{ data: new Array(DIST_GROUPS.length).fill(0), backgroundColor: c.dist, borderWidth: 2, borderColor: c.surface }]
    },
    options: {
      ...shared, cutout: '58%',
      plugins: {
        legend: { position: 'bottom', labels: { color: c.textsec, font: { size: 10 }, boxWidth: 10, padding: 8 } },
        tooltip: { callbacks: { label: ctx => {
          const total = ctx.dataset.data.reduce((a,b) => a+b, 0);
          const pct = total > 0 ? ((ctx.parsed/total)*100).toFixed(1) : '0.0';
          return ` ${ctx.label}: RM ${ctx.parsed.toLocaleString('en-MY',{minimumFractionDigits:2})} (${pct}%)`;
        }}}
      }
    }
  });

  const shortLabels = SAVINGS_ITEMS.map(it => it.label.length > 16 ? it.label.slice(0,14)+'…' : it.label);
  st.charts.sav = new Chart(document.getElementById('chartSav'), {
    type: 'bar',
    data: {
      labels: shortLabels,
      datasets: [
        { label: 'Accumulated', data: new Array(SAVINGS_ITEMS.length).fill(0), backgroundColor: c.s1, borderRadius: 4, borderSkipped: false },
        { label: 'Goal',        data: new Array(SAVINGS_ITEMS.length).fill(0), backgroundColor: c.grid, borderRadius: 4, borderSkipped: false },
      ]
    },
    options: {
      ...shared, indexAxis: 'y',
      plugins: {
        legend: { position: 'bottom', labels: { color: c.textsec, font: { size: 11 }, boxWidth: 12, padding: 10 } },
        tooltip: { callbacks: { label: ctx => ` ${ctx.dataset.label}: RM ${ctx.parsed.x.toLocaleString('en-MY',{minimumFractionDigits:2})}` } },
      },
      scales: {
        x: { ticks: { color: c.muted, font: { size: 10 }, callback: v => 'RM '+v.toLocaleString('en-MY') }, grid: { color: c.grid } },
        y: { ticks: { color: c.muted, font: { size: 10 } }, grid: { color: 'transparent' } }
      }
    }
  });

  updateCharts();
}

function updateCharts() {
  if (!st.charts?.pa) return;
  const s = summary();
  const dist = distribution();
  const d = curData();

  st.charts.pa.data.datasets[0].data = [s.ip, s.ep, s.sp];
  st.charts.pa.data.datasets[1].data = [s.ia, s.ea, s.sa];
  st.charts.pa.update('none');

  st.charts.dist.data.datasets[0].data = DIST_GROUPS.map(g => dist[g.key] || 0);
  st.charts.dist.update('none');

  st.charts.sav.data.datasets[0].data = SAVINGS_ITEMS.map(it => calcAccumulated(it.id));
  st.charts.sav.data.datasets[1].data = SAVINGS_ITEMS.map(it => numv(d.savings[it.id].goal));
  st.charts.sav.update('none');
}

// =============================================================================
// COPY FROM LAST MONTH
// =============================================================================

function copyFromPrevMonth() {
  let py = st.year, pm = st.month - 1;
  if (pm === 0) { pm = 12; py--; }
  const prevKey = key(py, pm);
  if (!st.data[prevKey]) { toast(`No data for ${MONTHS[pm-1]} ${py}`); return; }

  const prev = st.data[prevKey];
  const curr = curData();

  EXPENSE_CATS.forEach(cat => {
    cat.items.forEach(it => {
      curr.expenses[cat.id][it.id].b = prev.expenses[cat.id]?.[it.id]?.b || 0;
    });
  });
  INCOME_ITEMS.forEach(it => { curr.income[it.id].p = prev.income[it.id]?.p || 0; });
  SAVINGS_ITEMS.forEach(it => {
    curr.savings[it.id].p    = prev.savings[it.id]?.p    || 0;
    curr.savings[it.id].goal = prev.savings[it.id]?.goal || 0;
  });

  buildBudgetPage();
  updateDerived();
  toast(`Copied from ${MONTHS[pm-1]} ${py} ✓`);
}

// =============================================================================
// EVENTS & INIT
// =============================================================================

document.addEventListener('input', e => {
  const el = e.target;
  if (!el.classList.contains('ni')) return;
  const val = numv(el.value);
  const d = curData();
  const t = el.dataset.t;
  if (t === 'exp') {
    d.expenses[el.dataset.c][el.dataset.i][el.dataset.f] = val;
  } else if (t === 'inc') {
    d.income[el.dataset.i][el.dataset.f] = val;
  } else if (t === 'sav') {
    d.savings[el.dataset.i][el.dataset.f] = val;
  }
  updateDerived();
});

function changeMonth() {
  st.year  = parseInt(document.getElementById('selYear').value);
  st.month = parseInt(document.getElementById('selMonth').value);
  buildBudgetPage();
  buildLogPage();
  computeActuals();
  updateDerived();
}

function toast(msg, ms = 2500) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), ms);
}

document.addEventListener('DOMContentLoaded', () => {
  loadPrefs();

  const now = new Date();
  st.year  = now.getFullYear();
  st.month = now.getMonth() + 1;

  // Populate month/year selects
  const selM = document.getElementById('selMonth');
  const selY = document.getElementById('selYear');
  MONTHS.forEach((m, i) => {
    const o = document.createElement('option');
    o.value = i + 1; o.textContent = m;
    if (i + 1 === st.month) o.selected = true;
    selM.appendChild(o);
  });
  for (let y = st.year - 2; y <= st.year + 5; y++) {
    const o = document.createElement('option');
    o.value = y; o.textContent = y;
    if (y === st.year) o.selected = true;
    selY.appendChild(o);
  }

  // Month navigation
  selM.addEventListener('change', changeMonth);
  selY.addEventListener('change', changeMonth);

  document.getElementById('btnPrev').addEventListener('click', () => {
    if (st.month === 1) { st.month = 12; st.year--; }
    else st.month--;
    selM.value = st.month; selY.value = st.year;
    buildBudgetPage(); buildLogPage(); computeActuals(); updateDerived();
  });
  document.getElementById('btnNext').addEventListener('click', () => {
    if (st.month === 12) { st.month = 1; st.year++; }
    else st.month++;
    selM.value = st.month; selY.value = st.year;
    buildBudgetPage(); buildLogPage(); computeActuals(); updateDerived();
  });

  // Header actions
  document.getElementById('btnSave').addEventListener('click', async () => {
    await doSave();
    toast('Saved ✓');
  });

  document.getElementById('btnClear').addEventListener('click', async () => {
    if (!confirm(`Reset ${MONTHS[st.month-1]} ${st.year}?`)) return;
    const k = curKey();
    delete st.data[k];
    if (FIREBASE_ENABLED && st.user) await deleteMonthFromCloud(k);
    else saveLocal();
    buildBudgetPage(); buildLogPage(); updateDerived();
    toast('Month reset');
  });

  document.getElementById('btnCopy').addEventListener('click', copyFromPrevMonth);

  document.getElementById('btnTheme').addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    document.getElementById('btnTheme').innerHTML = next === 'dark' ? '&#9728;' : '&#9790;';
    savePrefs();
    setTimeout(initCharts, 30);
  });

  document.getElementById('btnTheme').innerHTML =
    document.documentElement.dataset.theme === 'dark' ? '&#9728;' : '&#9790;';

  // Bottom nav
  document.querySelectorAll('.bnav-tab').forEach(tab => {
    tab.addEventListener('click', () => switchPage(tab.dataset.page));
  });

  // Init entry form
  initEntryForm();

  // Start on Home page (hides budget-only buttons)
  switchPage('home');

  // Auth flow (shows data once loaded)
  initAuth();
});
