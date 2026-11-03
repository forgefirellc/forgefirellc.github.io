'use strict';
const form = document.getElementById('project-form');
if (form) {
  const fields = document.getElementById('project-fields');
  const review = document.getElementById('inquiry-review');
  const draftLink = document.getElementById('email-draft');
  fields.disabled = false;
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const value = key => String(data.get(key) || '').trim() || 'Not specified';
    const body = [
      'Construction project inquiry — Forge Fire LLC', '',
      `Name: ${value('name')}`, `Email: ${value('email')}`, `Phone: ${value('phone')}`,
      `Project: ${value('project')}`, `City / project area: ${value('location')}`,
      `Approximate size / intended use: ${value('size')}`, `Timing: ${value('timing')}`,
      `Budget range: ${value('budget')}`, '', `Project details:\n${value('details')}`, '',
      'Please contact me to discuss project fit, site details and scope before an estimate.'
    ].join('\n');
    document.getElementById('inquiry-summary').value = body;
    draftLink.href = `mailto:forgefire@forgefirellc.com?subject=${encodeURIComponent('Construction project inquiry — ' + value('project'))}&body=${encodeURIComponent(body)}`;
    review.hidden = false;
    document.getElementById('review-title').focus();
  });
  form.addEventListener('input', () => { review.hidden = true; draftLink.removeAttribute('href'); });
  document.querySelectorAll('[data-project]').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('project-type').value = link.dataset.project;
      review.hidden = true;
      draftLink.removeAttribute('href');
    });
  });
}
