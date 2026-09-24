// Fabric (kumaş) swatch catalogue — single source of truth shared by index.html
// (order screen fabric picker) and fabrics.html (the shareable read-only catalogue
// page for customers). code -> file extension, files served from imgs/fabrics/<CODE>.<ext>.
const FABRIC_MANIFEST = {'ADEL-02':'jpg','ADEL-04':'jpg','ADEL-07':'jpg','ADEL-09':'jpg','ADEL-19':'jpg','BORNOVA-101':'jpg','BORNOVA-215':'jpg','BORNOVA-303':'jpg','BORNOVA-317':'jpg','BORNOVA-418':'jpg','BORNOVA-504':'jpg','FEZA-06':'jpg','FEZA-07':'jpg','FEZA-14':'jpg','FEZA-15':'jpg','FEZA-17':'jpg','FEZA-20':'jpg','FEZA-21':'jpg','LOFT-01':'jpg','LOFT-02':'jpg','LOFT-03':'jpg','LOFT-04':'jpg','LOFT-05':'jpg','LOFT-06':'jpg','LOFT-07':'jpg','LOFT-08':'jpg','LOFT-09':'jpg','LOFT-10':'jpg','LOFT-11':'jpg','LOFT-12':'jpg','LOFT-13':'jpg','LOFT-14':'jpg','URAS-16':'jpg','URAS-24':'jpg'};
const FABRIC_BASE = 'imgs/fabrics/';
function fabricUrl(code) {
  if (!code) return '';
  const key = String(code).trim().toUpperCase();
  const ext = FABRIC_MANIFEST[key];
  return ext ? (FABRIC_BASE + key + '.' + ext) : '';
}
if (typeof window !== 'undefined') { window.FABRIC_MANIFEST = FABRIC_MANIFEST; window.fabricUrl = fabricUrl; }
