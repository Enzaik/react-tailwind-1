import React from 'react';

function Component() {
  return <div></div>;
}

export default Component;
EOF &&
cat > Container.js << EOF 
import React from 'react';
import Component from './Component';

function Container() {
  return <Component />;
}

export default Container;
EOF && cat > index.js << EOF 
import  from './Container';

export default ;

EOF && cat > foo.txt << EOF
import React from 'react';

function Component() {
  return <div></div>;
}

export default Component;
