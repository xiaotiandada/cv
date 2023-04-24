/**
 * iframe: true // 设置为数值可控制 iframe 高度
 */

import React from 'react';
import { Button } from './Button';

const intents = [undefined, 'primary', 'secondary'] as const;
const sizes = [undefined, 'medium', 'small'] as const;

function App() {
  return (
    <table className="variant-table">
      <thead>
        <tr>
          <th></th>
          {intents.map((intent) => (
            <th scope="col">{intent || 'default'}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sizes.map((size) => (
          <tr>
            <th scope="row">{size || 'default'}</th>
            {intents.map((intent) => (
              <td scope="col">
                <Button {...(intent && { intent })} {...(size && { size })}>
                  {intent || 'default'} button
                </Button>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;
