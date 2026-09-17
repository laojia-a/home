function openConfiguredTool(link, doc=document){
  const anchor=doc.createElement('a');
  anchor.href=link.url;
  anchor.target='_blank';
  anchor.rel='noopener noreferrer';
  doc.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
}

export { openConfiguredTool };
