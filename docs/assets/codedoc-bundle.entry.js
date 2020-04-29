import { getRenderer } from '/Users/admin/Git_Downloads/MSA-AUS-2020-AzureML/.codedoc/node_modules/@codedoc/core/dist/es6/transport/renderer.js';
import { initJssCs } from '/Users/admin/Git_Downloads/MSA-AUS-2020-AzureML/.codedoc/node_modules/@codedoc/core/dist/es6/transport/setup-jss.js';initJssCs();
import { installTheme } from '/Users/admin/Git_Downloads/MSA-AUS-2020-AzureML/.codedoc/content/theme.ts';installTheme();
import { codeSelection } from '/Users/admin/Git_Downloads/MSA-AUS-2020-AzureML/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/selection.js';codeSelection();
import { sameLineLengthInCodes } from '/Users/admin/Git_Downloads/MSA-AUS-2020-AzureML/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/same-line-length.js';sameLineLengthInCodes();
import { initHintBox } from '/Users/admin/Git_Downloads/MSA-AUS-2020-AzureML/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-hint/index.js';initHintBox();
import { initCodeLineRef } from '/Users/admin/Git_Downloads/MSA-AUS-2020-AzureML/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-ref/index.js';initCodeLineRef();
import { initSmartCopy } from '/Users/admin/Git_Downloads/MSA-AUS-2020-AzureML/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/smart-copy.js';initSmartCopy();
import { copyHeadings } from '/Users/admin/Git_Downloads/MSA-AUS-2020-AzureML/.codedoc/node_modules/@codedoc/core/dist/es6/components/heading/copy-headings.js';copyHeadings();
import { contentNavHighlight } from '/Users/admin/Git_Downloads/MSA-AUS-2020-AzureML/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/contentnav/highlight.js';contentNavHighlight();
import { loadDeferredIFrames } from '/Users/admin/Git_Downloads/MSA-AUS-2020-AzureML/.codedoc/node_modules/@codedoc/core/dist/es6/transport/deferred-iframe.js';loadDeferredIFrames();
import { smoothLoading } from '/Users/admin/Git_Downloads/MSA-AUS-2020-AzureML/.codedoc/node_modules/@codedoc/core/dist/es6/transport/smooth-loading.js';smoothLoading();
import { tocHighlight } from '/Users/admin/Git_Downloads/MSA-AUS-2020-AzureML/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toc-highlight.js';tocHighlight();
import { postNavSearch } from '/Users/admin/Git_Downloads/MSA-AUS-2020-AzureML/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/search/post-nav/index.js';postNavSearch();
import { ToCPrevNext } from '/Users/admin/Git_Downloads/MSA-AUS-2020-AzureML/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/prevnext/index.js';
import { GithubSearch } from '/Users/admin/Git_Downloads/MSA-AUS-2020-AzureML/.codedoc/node_modules/@codedoc/core/dist/es6/components/misc/github/search.js';
import { ToCToggle } from '/Users/admin/Git_Downloads/MSA-AUS-2020-AzureML/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toggle/index.js';
import { DarkModeSwitch } from '/Users/admin/Git_Downloads/MSA-AUS-2020-AzureML/.codedoc/node_modules/@codedoc/core/dist/es6/components/darkmode/index.js';
import { ConfigTransport } from '/Users/admin/Git_Downloads/MSA-AUS-2020-AzureML/.codedoc/node_modules/@codedoc/core/dist/es6/transport/config.js';

const components = {
  'ZxxSYPNrCEmBEd9vHmPDxA==': ToCPrevNext,
  '2eEveRs4JmCAvb9B6+nI0g==': GithubSearch,
  'YJYfvSMDiaizwQw2i25OpQ==': ToCToggle,
  'bnBU6jaU8b++OHPqFfb74Q==': DarkModeSwitch,
  '/gFEszpGlmsHLp5acvdDpQ==': ConfigTransport
};

const renderer = getRenderer();
const ogtransport = window.__sdh_transport;
window.__sdh_transport = function(id, hash, props) {
  if (hash in components) {
    const target = document.getElementById(id);
    renderer.render(renderer.create(components[hash], props)).after(target);
    target.remove();
  }
  else if (ogtransport) ogtransport(id, hash, props);
}
