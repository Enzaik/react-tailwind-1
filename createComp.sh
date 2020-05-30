cat > ${comp}Component.js << EOF 
import React from 'react';

function ${comp}Component() {
  return <div>${comp}</div>;
}

export default ${comp}Component;
EOF && cat > ${comp}Container.js << EOF 
import React from 'react';
import ${comp}Component from './${comp}Component';

function ${comp}Container() {
  return <${comp}Component />;
}

export default ${comp}Container;
EOF && cat > index.js << EOF
import ${comp} from './${comp}Container';

export default ${comp};
EOF