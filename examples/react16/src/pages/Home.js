import React, {useMemo,useEffect} from 'react';
import {jsPlumb} from 'jsplumb';

export default function() {
  const instance = useMemo(() => {
      return jsPlumb.getInstance({
          Anchor: 'AutoDefault',
          Endpoint: 'Blank',
          Container: String(new Date().getTime()),
          Connector: ['Flowchart', { cornerRadius: 5 }],
          PaintStyle: {
              strokeWidth: 2,
              stroke: '#d8dee6'
          },
          HoverPaintStyle: { strokeWidth: 2, stroke: '#d8dee6' },
          ConnectionOverlays: [
              ['Arrow', { location: 1, width: 10, length: 10 }]
          ]
      });
  }, []);

  useEffect(() => {
    instance.ready(() => {
          const param = {
              source : "window2",
              target : "window3",
          };
          instance.connect(param);
    });
  }, [instance]);

  return (
    <h2 className="app-nav-item" style={{ borderColor: 'red' }}>
      Home
      <div id='window2'>2</div>
      <div id='window3'>3</div>
    </h2>
  );
}
