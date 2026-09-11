/*
 * course-gen.js: a browser-local Markdown builder.
 * A page defines window.COURSE_GEN_CONFIG, then loads this file. It renders a
 * form into [data-course-gen], and on build produces a Markdown file the reader
 * can preview, copy and download. Everything runs in the browser: nothing typed
 * here is ever sent to a server. Drafts autosave to localStorage on this device
 * only. This IS the self-sovereign promise, working: you build it, you own it,
 * it stays with you.
 *
 * Config shape:
 *   window.COURSE_GEN_CONFIG = {
 *     filename: 'ai-context-starter.md',
 *     storeKey: 'aura-gen-mdai',              // localStorage key
 *     fields: [ { id, label, type:'text'|'textarea', placeholder, hint } ],
 *     template: "# ...{{id}}..."               // {{id}} tokens filled from fields
 *   }
 */
(() => {
  const cfg = window.COURSE_GEN_CONFIG;
  const mount = document.querySelector('[data-course-gen]');
  if (!cfg || !mount) { return; }

  const storeKey = cfg.storeKey || ('aura-gen-' + (cfg.filename || 'file'));
  const saved = (() => {
    try { return JSON.parse(localStorage.getItem(storeKey) || '{}'); }
    catch (e) { return {}; }
  })();

  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  const fieldsHtml = cfg.fields.map((f) => {
    const val = esc(saved[f.id] || '');
    const hint = f.hint ? `<small class="gen-hint">${esc(f.hint)}</small>` : '';
    const control = f.type === 'textarea'
      ? `<textarea id="gen-${f.id}" data-gen-field="${f.id}" rows="3" placeholder="${esc(f.placeholder || '')}">${val}</textarea>`
      : `<input type="text" id="gen-${f.id}" data-gen-field="${f.id}" placeholder="${esc(f.placeholder || '')}" value="${val}">`;
    return `<label class="gen-field"><span>${esc(f.label)}</span>${control}${hint}</label>`;
  }).join('');

  mount.innerHTML = `
    <p class="gen-privacy">This builder runs entirely in your browser. Nothing you type is sent anywhere; your draft is saved on this device only. Check the file before you share it with anyone or anything.</p>
    <form class="gen-form" data-gen-form>
      ${fieldsHtml}
      <div class="gen-actions">
        <button type="submit" class="button button-primary">Build my file</button>
        <button type="button" class="button button-secondary" data-gen-copy hidden>Copy</button>
        <button type="button" class="button button-secondary" data-gen-download hidden>Download .md</button>
      </div>
    </form>
    <pre class="gen-preview" data-gen-preview hidden aria-live="polite"></pre>`;

  const form = mount.querySelector('[data-gen-form]');
  const preview = mount.querySelector('[data-gen-preview]');
  const copyBtn = mount.querySelector('[data-gen-copy]');
  const dlBtn = mount.querySelector('[data-gen-download]');

  const readValues = () => {
    const v = {};
    mount.querySelectorAll('[data-gen-field]').forEach((el) => { v[el.dataset.genField] = el.value; });
    return v;
  };

  const persist = () => {
    try { localStorage.setItem(storeKey, JSON.stringify(readValues())); } catch (e) { /* storage off; carry on */ }
  };
  mount.querySelectorAll('[data-gen-field]').forEach((el) => el.addEventListener('input', persist));

  const buildMarkdown = (values) => cfg.template.replace(/\{\{(\w+)\}\}/g, (m, id) => {
    const val = (values[id] || '').trim();
    return val || '_(not filled in yet)_';
  });

  let lastText = '';

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    lastText = buildMarkdown(readValues());
    preview.textContent = lastText;
    preview.hidden = false;
    copyBtn.hidden = false;
    dlBtn.hidden = false;
    persist();
  });

  copyBtn.addEventListener('click', () => {
    if (!lastText) { return; }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(lastText).then(() => {
        copyBtn.textContent = 'Copied';
        setTimeout(() => { copyBtn.textContent = 'Copy'; }, 1600);
      });
    }
  });

  dlBtn.addEventListener('click', () => {
    if (!lastText) { return; }
    const blob = new Blob([lastText], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = cfg.filename || 'file.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
})();
