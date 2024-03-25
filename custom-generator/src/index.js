const commands = process.argv.slice(2);

const menu = () => {
  console.log('Welcome to code generator!');
  console.log('\nUsage: generate [command]');

  console.log("\nAvailable commands:")
  console.log("   c, component", "\t", "Generates brand new component");
  console.log("  -h, --help   ", "\t", "To see all available commands");
};

switch (commands[0]) {
  case 'c':
  case 'component':
    import('./component/index.js').then(({ generateComponent }) => generateComponent());
    break;
  case '-h':
  case '--help':
  default:
    menu();
}
