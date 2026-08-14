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
  user: null,       // Firebase user object (null = local mode)
};

function key(y, m) { return `${y}-${String(m).padStart(2,'0')}`; }
function curKey()  { return key(st.year, st.month); }

function emptyMonth() {
  const d = { income: {}, expenses: {}, savings: {} };
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
// STORAGE — Firebase or localStorage fallback
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
    loadLocal(); // fallback to local cache
  }
  showLoading(false);
  buildUI();
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
    // Local mode — skip login screen entirely
    showLoginScreen(false);
    loadLocal();
    buildUI();
    updateDerived();
    setTimeout(initCharts, 60);
    return;
  }

  const auth = firebase.auth();

  // Show local mode option
  document.getElementById('localModeNote').style.display = 'block';

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
    buildUI();
    updateDerived();
    setTimeout(initCharts, 60);
  });
}

function showLoginScreen(show) {
  const ls = document.getElementById('loginScreen');
  ls.style.display = show ? 'flex' : 'none';
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
  // Simple: disable inputs while loading
  document.querySelectorAll('.ni').forEach(el => el.disabled = show);
}

function fmt(n) {
  return numv(n).toLocaleString('en-MY', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function fmtVar(val) {
  if (val > 0) return { t: fmt(val),  cls: 'vp' };
  if (val < 0) return { t: fmt(val),  cls: 'vn' };
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
// DOM BUILDERS
// =============================================================================

function buildExpenseCat(cat) {
  const d = curData();
  const textCol = isLight(cat.color) ? '#0b0b0b' : '#ffffff';

  const section = document.createElement('div');
  section.className = 'cat-section';

  const rows = cat.items.map(it => {
    const b = numv(d.expenses[cat.id][it.id].b) || '';
    const a = numv(d.expenses[cat.id][it.id].a) || '';
    return `<tr>
      <td><span class="item-label">${it.label}</span></td>
      <td><input type="number" class="ni" data-t="exp" data-c="${cat.id}" data-i="${it.id}" data-f="b" value="${b}" placeholder="0.00" min="0" step="0.01" inputmode="decimal"></td>
      <td><input type="number" class="ni" data-t="exp" data-c="${cat.id}" data-i="${it.id}" data-f="a" value="${a}" placeholder="0.00" min="0" step="0.01" inputmode="decimal"></td>
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
    const a = numv(d.income[it.id].a) || '';
    return `<tr>
      <td><span class="item-label">${it.label}</span></td>
      <td><input type="number" class="ni" data-t="inc" data-i="${it.id}" data-f="p" value="${p}" placeholder="0.00" min="0" step="0.01" inputmode="decimal"></td>
      <td><input type="number" class="ni" data-t="inc" data-i="${it.id}" data-f="a" value="${a}" placeholder="0.00" min="0" step="0.01" inputmode="decimal"></td>
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
    const a  = numv(sv.a)    || '';
    const g  = numv(sv.goal) || '';
    return `<tr>
      <td><span class="item-label">${it.label}</span></td>
      <td><input type="number" class="ni ni-xs" data-t="sav" data-i="${it.id}" data-f="p"    value="${p}" placeholder="0" min="0" step="0.01" inputmode="decimal"></td>
      <td><input type="number" class="ni ni-xs" data-t="sav" data-i="${it.id}" data-f="a"    value="${a}" placeholder="0" min="0" step="0.01" inputmode="decimal"></td>
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
// UI ASSEMBLY
// =============================================================================

function buildUI() {
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

function initCollapsible() {
  if (window.innerWidth >= 768) return;
  document.querySelectorAll('.cat-section').forEach(section => {
    section.classList.add('collapsed');
    section.querySelector('.cat-header').addEventListener('click', () => {
      section.classList.toggle('collapsed');
    });
  });
}

// =============================================================================
// DERIVED VALUE UPDATES
// =============================================================================

function updateDerived() {
  const d = curData();

  EXPENSE_CATS.forEach(cat => {
    let tb = 0, ta = 0;
    cat.items.forEach(it => {
      const b = numv(d.expenses[cat.id][it.id].b);
      const a = numv(d.expenses[cat.id][it.id].a);
      tb += b; ta += a;
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
    // Preview total in collapsed header
    const ptEl = document.getElementById(`cpt_${cat.id}`);
    if (ptEl) ptEl.textContent = ta > 0 ? `RM ${fmt(ta)}` : '';
  });

  setEl('inc_tp', fmt(incSum('p')));
  setEl('inc_ta', fmt(incSum('a')));

  setEl('sav_tp',   fmt(savSum('p')));
  setEl('sav_ta',   fmt(savSum('a')));
  setEl('sav_tacc', fmt(calcAllAccumulated()));
  setEl('sav_tgoal',fmt(savSum('goal')));

  SAVINGS_ITEMS.forEach(it => {
    const el = document.getElementById(`acc_${it.id}`);
    if (el) el.textContent = fmt(calcAccumulated(it.id));
  });

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
  if (st.charts) Object.values(st.charts).forEach(c => c.destroy());
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
  if (!st.charts || !st.charts.pa) return;
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

  buildUI();
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
  buildUI();
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

  // Wire up navigation & actions
  selM.addEventListener('change', changeMonth);
  selY.addEventListener('change', changeMonth);

  document.getElementById('btnPrev').addEventListener('click', () => {
    if (st.month === 1) { st.month = 12; st.year--; }
    else st.month--;
    selM.value = st.month; selY.value = st.year;
    buildUI(); updateDerived();
  });
  document.getElementById('btnNext').addEventListener('click', () => {
    if (st.month === 12) { st.month = 1; st.year++; }
    else st.month++;
    selM.value = st.month; selY.value = st.year;
    buildUI(); updateDerived();
  });

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
    buildUI(); updateDerived();
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

  // Set initial theme icon
  document.getElementById('btnTheme').innerHTML =
    document.documentElement.dataset.theme === 'dark' ? '&#9728;' : '&#9790;';

  // Start auth flow (handles showing login screen or loading data)
  initAuth();
});
