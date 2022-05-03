const { initialize } = require('zokrates-js-node'); // 1.0.21
 
let code = `
  def main(private field a, private field b, field c) -> (field): 
      return if a * b == c then 1 else 0 fi
`;

initialize().then((provider) => {

    // Compilation
    let artifacts = provider.compile(code, "main");

    // Computation
    let computationResult = provider.computeWitness(artifacts, ["2", "2", "4"]);

    // Generate setup keypair
    let keypair = provider.setup(artifacts.program);

    // Export solidity verifier
    let _verifier = provider.exportSolidityVerifier(keypair.vk, true);

    // Generate proof
    let _proof = provider.generateProof(artifacts.program, computationResult.witness, keypair.pk);
});