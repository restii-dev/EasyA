/**
 * EasyA - Admin SUB-RESTI-1738 | 60 games | Mirror
 */
const CONFIG = {
  helpDuration: 30000,
  adminKey: 'SUB-RESTI-1738',
  adminKeys: ['SUB-RESTI-1738', 'DIDDY-AHHH-BLUD-1738'],
  fallbackKeys: ['EASY-A202-6KEY-GEORG','GEOR-GIAH-SKEY-2026','UNBL-OCKD-GAME-EASYA','PROX-YKEY-COMP-LEX1','TEST-KEY1-2345-6789'],
  proxyEngines: {
    ultraviolet: { name: 'Ultraviolet' },
    dynamic: { name: 'Dynamic' },
    rammerhead: { name: 'Rammerhead' },
    alloy: { name: 'Alloy' }
  }
};
function normalizeKey(k) { return String(k||'').replace(/[^A-Za-z0-9]/g,'').toUpperCase(); }
