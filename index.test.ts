import { trimMargin, trimIndent } from './index';

describe('trimMargin', () => {
  test('use tag', () => {
    const s = trimMargin`ABC
            |123
                |456`;
    expect(s).toBe('ABC\n123\n456');
  });

  test('use function', () => {
    const s = trimMargin(
      `
#XYZ
    #foo
    #bar
`,
      '#',
    );
    expect(s).toBe('XYZ\nfoo\nbar');
  });
});

describe('trimIndent', () => {
  test('use tag', () => {
    const s = trimIndent`
        ABC
         123
          456
        `;
    expect(s).toBe('ABC\n 123\n  456');
  });

  test('use function', () => {
    const s = trimIndent(`
        ABC
         123
          456
    `);
    expect(s).toBe('ABC\n 123\n  456');
  });
});
