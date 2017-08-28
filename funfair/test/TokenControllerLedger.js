var tclOutput={"contracts":{"TokenControllerLedger.sol:Controller":{"abi":"[{\"constant\":false,\"inputs\":[{\"name\":\"_token\",\"type\":\"address\"}],\"name\":\"setToken\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_spender\",\"type\":\"address\"},{\"name\":\"_from\",\"type\":\"address\"},{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_ledger\",\"type\":\"address\"}],\"name\":\"setLedger\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"finalize\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"ledger\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_a\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"acceptOwnership\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newOwner\",\"type\":\"address\"}],\"name\":\"changeOwner\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"finalized\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"},{\"name\":\"_spender\",\"type\":\"address\"},{\"name\":\"_addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseApproval\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_from\",\"type\":\"address\"},{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"},{\"name\":\"_spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"},{\"name\":\"_spender\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"},{\"name\":\"_spender\",\"type\":\"address\"},{\"name\":\"_subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseApproval\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"token\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"type\":\"function\"}]","bin":"60606040525b60008054600160a060020a03191633600160a060020a03161790555b5b610b43806100316000396000f300606060405236156100ee5763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663144fa6d781146100f057806315dacbea1461010e57806318160ddd1461014d5780633246887d1461016f5780634bb278f31461018d57806356397c351461019f57806370a08231146101cb57806379ba5097146101f95780638da5cb5b1461020b578063a6f9dae114610237578063b3f05b9714610255578063bcdd612114610279578063beabacc8146102b2578063dd62ed3e146102eb578063e1f21c671461031f578063f019c26714610358578063fc0c546a14610391575bfe5b34156100f857fe5b61010c600160a060020a03600435166103bd565b005b341561011657fe5b610139600160a060020a0360043581169060243581169060443516606435610406565b604080519115158252519081900360200190f35b341561015557fe5b61015d6104cb565b60408051918252519081900360200190f35b341561017757fe5b61010c600160a060020a0360043516610549565b005b341561019557fe5b61010c610592565b005b34156101a757fe5b6101af6105e7565b60408051600160a060020a039092168252519081900360200190f35b34156101d357fe5b61015d600160a060020a03600435166105f6565b60408051918252519081900360200190f35b341561020157fe5b61010c6106a1565b005b341561021357fe5b6101af6106eb565b60408051600160a060020a039092168252519081900360200190f35b341561023f57fe5b61010c600160a060020a03600435166106fa565b005b341561025d57fe5b610139610743565b604080519115158252519081900360200190f35b341561028157fe5b610139600160a060020a0360043581169060243516604435610764565b604080519115158252519081900360200190f35b34156102ba57fe5b610139600160a060020a0360043581169060243516604435610820565b604080519115158252519081900360200190f35b34156102f357fe5b61015d600160a060020a03600435811690602435166108dc565b60408051918252519081900360200190f35b341561032757fe5b610139600160a060020a0360043581169060243516604435610990565b604080519115158252519081900360200190f35b341561036057fe5b610139600160a060020a0360043581169060243516604435610a4c565b604080519115158252519081900360200190f35b341561039957fe5b6101af610b08565b60408051600160a060020a039092168252519081900360200190f35b60005433600160a060020a039081169116146103d95760006000fd5b6003805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0383161790555b5b50565b60035460009033600160a060020a039081169116146104255760006000fd5b600254604080516000602091820181905282517f15dacbea000000000000000000000000000000000000000000000000000000008152600160a060020a038a811660048301528981166024830152888116604483015260648201889052935193909416936315dacbea936084808301949391928390030190829087803b15156104aa57fe5b6102c65a03f115156104b857fe5b5050604051519150505b5b949350505050565b600254604080516000602091820181905282517f18160ddd00000000000000000000000000000000000000000000000000000000815292519093600160a060020a0316926318160ddd92600480830193919282900301818787803b151561052e57fe5b6102c65a03f1151561053c57fe5b5050604051519150505b90565b60005433600160a060020a039081169116146105655760006000fd5b6002805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0383161790555b5b50565b60005433600160a060020a039081169116146105ae5760006000fd5b6001805474ff00000000000000000000000000000000000000001916740100000000000000000000000000000000000000001790555b5b565b600254600160a060020a031681565b60035460009033600160a060020a039081169116146106155760006000fd5b600254604080516000602091820181905282517f70a08231000000000000000000000000000000000000000000000000000000008152600160a060020a038781166004830152935193909416936370a08231936024808301949391928390030190829087803b151561068357fe5b6102c65a03f1151561069157fe5b5050604051519150505b5b919050565b60015433600160a060020a03908116911614156105e4576001546000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a039092169190911790555b5b565b600054600160a060020a031681565b60005433600160a060020a039081169116146107165760006000fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0383161790555b5b50565b60015474010000000000000000000000000000000000000000900460ff1681565b60035460009033600160a060020a039081169116146107835760006000fd5b600254604080516000602091820181905282517fbcdd6121000000000000000000000000000000000000000000000000000000008152600160a060020a0389811660048301528881166024830152604482018890529351939094169363bcdd6121936064808301949391928390030190829087803b151561080057fe5b6102c65a03f1151561080e57fe5b5050604051519150505b5b9392505050565b60035460009033600160a060020a0390811691161461083f5760006000fd5b600254604080516000602091820181905282517fbeabacc8000000000000000000000000000000000000000000000000000000008152600160a060020a0389811660048301528881166024830152604482018890529351939094169363beabacc8936064808301949391928390030190829087803b151561080057fe5b6102c65a03f1151561080e57fe5b5050604051519150505b5b9392505050565b60035460009033600160a060020a039081169116146108fb5760006000fd5b600254604080516000602091820181905282517fdd62ed3e000000000000000000000000000000000000000000000000000000008152600160a060020a03888116600483015287811660248301529351939094169363dd62ed3e936044808301949391928390030190829087803b151561097157fe5b6102c65a03f1151561097f57fe5b5050604051519150505b5b92915050565b60035460009033600160a060020a039081169116146109af5760006000fd5b600254604080516000602091820181905282517fe1f21c67000000000000000000000000000000000000000000000000000000008152600160a060020a0389811660048301528881166024830152604482018890529351939094169363e1f21c67936064808301949391928390030190829087803b151561080057fe5b6102c65a03f1151561080e57fe5b5050604051519150505b5b9392505050565b60035460009033600160a060020a03908116911614610a6b5760006000fd5b600254604080516000602091820181905282517ff019c267000000000000000000000000000000000000000000000000000000008152600160a060020a0389811660048301528881166024830152604482018890529351939094169363f019c267936064808301949391928390030190829087803b151561080057fe5b6102c65a03f1151561080e57fe5b5050604051519150505b5b9392505050565b600354600160a060020a0316815600a165627a7a7230582034629b3c293ac7cd9b06d8d9917fec21af2eba099564c0a73622278fa1f0c3640029"},"TokenControllerLedger.sol:EventDefinitions":{"abi":"[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"}]","bin":"60606040523415600b57fe5b5b60338060196000396000f30060606040525bfe00a165627a7a7230582049a69e0c557bc72d5b56f2370bf6abde5ab863a0080960b6b868f7ab5597c29b0029"},"TokenControllerLedger.sol:Finalizable":{"abi":"[{\"constant\":false,\"inputs\":[],\"name\":\"finalize\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"acceptOwnership\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newOwner\",\"type\":\"address\"}],\"name\":\"changeOwner\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"finalized\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"}]","bin":"60606040525b60008054600160a060020a03191633600160a060020a03161790555b5b61023c806100316000396000f300606060405263ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416634bb278f3811461006657806379ba5097146100785780638da5cb5b1461008a578063a6f9dae1146100b6578063b3f05b97146100d4575bfe5b341561006e57fe5b6100766100f8565b005b341561008057fe5b61007661014d565b005b341561009257fe5b61009a610197565b60408051600160a060020a039092168252519081900360200190f35b34156100be57fe5b610076600160a060020a03600435166101a6565b005b34156100dc57fe5b6100e46101ef565b604080519115158252519081900360200190f35b60005433600160a060020a039081169116146101145760006000fd5b6001805474ff00000000000000000000000000000000000000001916740100000000000000000000000000000000000000001790555b5b565b60015433600160a060020a039081169116141561014a576001546000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a039092169190911790555b5b565b600054600160a060020a031681565b60005433600160a060020a039081169116146101c25760006000fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0383161790555b5b50565b60015474010000000000000000000000000000000000000000900460ff16815600a165627a7a7230582071ed9d88f4dad5ed7d20a39da89746cb18c4e25464b77bebd34df149532b97380029"},"TokenControllerLedger.sol:IToken":{"abi":"[{\"constant\":false,\"inputs\":[{\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"}]","bin":""},"TokenControllerLedger.sol:Ledger":{"abi":"[{\"constant\":false,\"inputs\":[{\"name\":\"_spender\",\"type\":\"address\"},{\"name\":\"_from\",\"type\":\"address\"},{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_a\",\"type\":\"address\"},{\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"finalize\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"acceptOwnership\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_controller\",\"type\":\"address\"}],\"name\":\"setController\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"bits\",\"type\":\"uint256[]\"}],\"name\":\"multiMint\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newOwner\",\"type\":\"address\"}],\"name\":\"changeOwner\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"finalized\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"},{\"name\":\"_spender\",\"type\":\"address\"},{\"name\":\"_addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseApproval\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_from\",\"type\":\"address\"},{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"},{\"name\":\"\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"},{\"name\":\"_spender\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"},{\"name\":\"_spender\",\"type\":\"address\"},{\"name\":\"_subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseApproval\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"controller\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"type\":\"function\"}]","bin":"60606040525b60008054600160a060020a03191633600160a060020a03161790555b5b610afb806100316000396000f300606060405236156100ee5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166315dacbea81146100f057806318160ddd1461012f57806340c10f19146101515780634bb278f31461017257806370a082311461018457806379ba5097146101b25780638da5cb5b146101c457806392eefe9b146101f05780639a0e4ebb1461020e578063a6f9dae114610263578063b3f05b9714610281578063bcdd6121146102a5578063beabacc8146102de578063dd62ed3e14610317578063e1f21c671461034b578063f019c26714610384578063f77c4791146103bd575bfe5b34156100f857fe5b61011b600160a060020a03600435811690602435811690604435166064356103e9565b604080519115158252519081900360200190f35b341561013757fe5b61013f610516565b60408051918252519081900360200190f35b341561015957fe5b610170600160a060020a036004351660243561051c565b005b341561017a57fe5b6101706105a3565b005b341561018c57fe5b61013f600160a060020a03600435166105e7565b60408051918252519081900360200190f35b34156101ba57fe5b6101706105f9565b005b34156101cc57fe5b6101d4610643565b60408051600160a060020a039092168252519081900360200190f35b34156101f857fe5b610170600160a060020a0360043516610652565b005b341561021657fe5b6101706004808035906020019082018035906020019080806020026020016040519081016040528093929190818152602001838360200280828437509496506106b495505050505050565b005b341561026b57fe5b610170600160a060020a0360043516610764565b005b341561028957fe5b61011b6107ad565b604080519115158252519081900360200190f35b34156102ad57fe5b61011b600160a060020a03600435811690602435166044356107bd565b604080519115158252519081900360200190f35b34156102e657fe5b61011b600160a060020a0360043581169060243516604435610843565b604080519115158252519081900360200190f35b341561031f57fe5b61013f600160a060020a0360043581169060243516610902565b60408051918252519081900360200190f35b341561035357fe5b61011b600160a060020a036004358116906024351660443561091f565b604080519115158252519081900360200190f35b341561038c57fe5b61011b600160a060020a03600435811690602435166044356109b2565b604080519115158252519081900360200190f35b34156103c557fe5b6101d4610a6e565b60408051600160a060020a039092168252519081900360200190f35b600254600090819033600160a060020a0390811691161461040a5760006000fd5b600160a060020a03851660009081526003602052604090205483901015610434576000915061050c565b50600160a060020a038085166000908152600460209081526040808320938916835292905220548281101561046c576000915061050c565b600160a060020a03841660009081526003602052604090205461048f9084610a7d565b600160a060020a0380861660009081526003602052604080822093909355908716815220546104be9084610aa5565b600160a060020a0386166000908152600360205260409020556104e18184610aa5565b600160a060020a038087166000908152600460209081526040808320938b1683529290522055600191505b5b50949350505050565b60055481565b60005433600160a060020a039081169116146105385760006000fd5b60015460a060020a900460ff16156105505760006000fd5b600160a060020a0382166000908152600360205260409020546105739082610a7d565b600160a060020a0383166000908152600360205260409020556005546105999082610a7d565b6005555b5b5b5050565b60005433600160a060020a039081169116146105bf5760006000fd5b6001805474ff0000000000000000000000000000000000000000191660a060020a1790555b5b565b60036020526000908152604090205481565b60015433600160a060020a03908116911614156105e4576001546000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a039092169190911790555b5b565b600054600160a060020a031681565b60005433600160a060020a0390811691161461066e5760006000fd5b60015460a060020a900460ff16156106865760006000fd5b6002805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0383161790555b5b5b50565b600080548190819033600160a060020a039081169116146106d55760006000fd5b60015460a060020a900460ff16156106ed5760006000fd5b600092505b835183101561075b576060848481518110151561070b57fe5b906020019060200201519060020a90049150838381518110151561072b57fe5b906020019060200201516bffffffffffffffffffffffff16905061074f828261051c565b5b6001909201916106f2565b5b5b5b50505050565b60005433600160a060020a039081169116146107805760006000fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0383161790555b5b50565b60015460a060020a900460ff1681565b600254600090819033600160a060020a039081169116146107de5760006000fd5b50600160a060020a0380851660009081526004602090815260408083209387168352929052205461080f8184610a7d565b600160a060020a03808716600090815260046020908152604080832093891683529290522055600191505b5b509392505050565b60025460009033600160a060020a039081169116146108625760006000fd5b600160a060020a0384166000908152600360205260409020548290101561088b575060006108fa565b600160a060020a0384166000908152600360205260409020546108ae9083610aa5565b600160a060020a0380861660009081526003602052604080822093909355908516815220546108dd9083610a7d565b600160a060020a0384166000908152600360205260409020555060015b5b9392505050565b600460209081526000928352604080842090915290825290205481565b60025460009033600160a060020a0390811691161461093e5760006000fd5b81158015906109715750600160a060020a0380851660009081526004602090815260408083209387168352929052205415155b1561097e575060006108fa565b50600160a060020a03808416600090815260046020908152604080832093861683529290522081905560015b5b9392505050565b600254600090819033600160a060020a039081169116146109d35760006000fd5b50600160a060020a0380851660009081526004602090815260408083209387168352929052205480831115610a2f57600160a060020a038086166000908152600460209081526040808320938816835292905290812055610a60565b61080f8184610aa5565b600160a060020a038087166000908152600460209081526040808320938916835292905220555b600191505b5b509392505050565b600254600160a060020a031681565b6000828201610a9a848210801590610a955750838210155b610abe565b8091505b5092915050565b6000610ab383831115610abe565b508082035b92915050565b8015156106af5760006000fd5b5b505600a165627a7a72305820f887fedfffaedd2c5c3eb271328b49f17aa1845fefae290d22badbdc5565e1e70029"},"TokenControllerLedger.sol:Owned":{"abi":"[{\"constant\":false,\"inputs\":[],\"name\":\"acceptOwnership\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newOwner\",\"type\":\"address\"}],\"name\":\"changeOwner\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"inputs\":[],\"payable\":false,\"type\":\"constructor\"}]","bin":"6060604052341561000c57fe5b5b60008054600160a060020a03191633600160a060020a03161790555b5b61017a806100396000396000f300606060405263ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166379ba509781146100505780638da5cb5b14610062578063a6f9dae11461008e575bfe5b341561005857fe5b6100606100ac565b005b341561006a57fe5b6100726100f6565b60408051600160a060020a039092168252519081900360200190f35b341561009657fe5b610060600160a060020a0360043516610105565b005b60015433600160a060020a03908116911614156100f3576001546000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a039092169190911790555b5b565b600054600160a060020a031681565b60005433600160a060020a039081169116146101215760006000fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0383161790555b5b505600a165627a7a7230582027c97c092628879ea7fe64e434360212c15a4611c11005e4edc8acc4f99038330029"},"TokenControllerLedger.sol:SafeMath":{"abi":"[]","bin":"60606040523415600b57fe5b5b60338060196000396000f30060606040525bfe00a165627a7a72305820f3c22bf86b525e0b2bf5b2a7d582132620aacb7cbc91bb0e6a4b624c76f0f52a0029"},"TokenControllerLedger.sol:Token":{"abi":"[{\"constant\":true,\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_spender\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_from\",\"type\":\"address\"},{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"finalize\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_spender\",\"type\":\"address\"},{\"name\":\"_subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseApproval\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_token\",\"type\":\"address\"},{\"name\":\"_to\",\"type\":\"address\"}],\"name\":\"claimTokens\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"a\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"acceptOwnership\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_c\",\"type\":\"address\"}],\"name\":\"setController\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newOwner\",\"type\":\"address\"}],\"name\":\"changeOwner\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"finalized\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_spender\",\"type\":\"address\"},{\"name\":\"_addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseApproval\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"},{\"name\":\"_spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"token\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"logTokenTransfer\",\"type\":\"event\"}]","bin":"60a0604052600760608190527f46756e46616972000000000000000000000000000000000000000000000000006080908152620000409160029190620000b7565b506003805460ff19166008178155604080518082019091528181527f46554e00000000000000000000000000000000000000000000000000000000006020909101908152620000939160049190620000b7565b505b60008054600160a060020a03191633600160a060020a03161790555b62000161565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620000fa57805160ff19168380011785556200012a565b828001600101855582156200012a579182015b828111156200012a5782518255916020019190600101906200010d565b5b50620001399291506200013d565b5090565b6200015e91905b8082111562000139576000815560010162000144565b5090565b90565b6110da80620001716000396000f300606060405236156100e05763ffffffff60e060020a60003504166306fdde0381146100e2578063095ea7b31461017257806318160ddd146101a557806323b872dd146101c7578063313ce567146102005780634bb278f314610226578063661884631461023857806369ffa08a1461026b57806370a08231146102a157806379ba5097146102cf5780638da5cb5b146102e157806392eefe9b1461030d57806395d89b411461032b578063a6f9dae1146103bb578063a9059cbb146103d9578063b3f05b971461040c578063d73dd62314610430578063dd62ed3e14610463575bfe5b34156100ea57fe5b6100f2610497565b604080516020808252835181830152835191928392908301918501908083838215610138575b80518252602083111561013857601f199092019160209182019101610118565b505050905090810190601f1680156101645780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561017a57fe5b610191600160a060020a0360043516602435610522565b604080519115158252519081900360200190f35b34156101ad57fe5b6101b56106a5565b60408051918252519081900360200190f35b34156101cf57fe5b610191600160a060020a0360043581169060243516604435610723565b604080519115158252519081900360200190f35b341561020857fe5b61021061082b565b6040805160ff9092168252519081900360200190f35b341561022e57fe5b610236610834565b005b341561024057fe5b610191600160a060020a0360043516602435610889565b604080519115158252519081900360200190f35b341561027357fe5b610191600160a060020a03600435811690602435166109ec565b604080519115158252519081900360200190f35b34156102a957fe5b6101b5600160a060020a0360043516610b6e565b60408051918252519081900360200190f35b34156102d757fe5b610236610bf9565b005b34156102e957fe5b6102f1610c43565b60408051600160a060020a039092168252519081900360200190f35b341561031557fe5b610236600160a060020a0360043516610c52565b005b341561033357fe5b6100f2610cc5565b604080516020808252835181830152835191928392908301918501908083838215610138575b80518252602083111561013857601f199092019160209182019101610118565b505050905090810190601f1680156101645780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156103c357fe5b610236600160a060020a0360043516610d53565b005b34156103e157fe5b610191600160a060020a0360043516602435610d9c565b604080519115158252519081900360200190f35b341561041457fe5b610191610e9b565b604080519115158252519081900360200190f35b341561043857fe5b610191600160a060020a0360043516602435610ebc565b604080519115158252519081900360200190f35b341561046b57fe5b6101b5600160a060020a036004358116906024351661101f565b60408051918252519081900360200190f35b6002805460408051602060018416156101000260001901909316849004601f8101849004840282018401909252818152929183018282801561051a5780601f106104ef5761010080835404028352916020019161051a565b820191906000526020600020905b8154815290600101906020018083116104fd57829003601f168201915b505050505081565b600060026105323660441461109d565b6005546040805160006020918201819052825160e160020a636eb1769f028152600160a060020a033381166004830152898116602483015293519194939093169263dd62ed3e92604480830193919282900301818787803b151561059257fe5b6102c65a03f115156105a057fe5b5050506040518051905011156105b65760006000fd5b600554604080516000602091820181905282517fe1f21c67000000000000000000000000000000000000000000000000000000008152600160a060020a0333811660048301528981166024830152604482018990529351939094169363e1f21c67936064808301949391928390030190829087803b151561063357fe5b6102c65a03f1151561064157fe5b505060405151925050811561069c5783600160a060020a031633600160a060020a03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925856040518082815260200191505060405180910390a35b5b5b5092915050565b600554604080516000602091820181905282517f18160ddd00000000000000000000000000000000000000000000000000000000815292519093600160a060020a0316926318160ddd92600480830193919282900301818787803b151561070857fe5b6102c65a03f1151561071657fe5b5050604051519150505b90565b600060036107333660641461109d565b600554604080516000602091820181905282517f15dacbea000000000000000000000000000000000000000000000000000000008152600160a060020a0333811660048301528a81166024830152898116604483015260648201899052935193909416936315dacbea936084808301949391928390030190829087803b15156107b857fe5b6102c65a03f115156107c657fe5b50506040515192505081156108215783600160a060020a031685600160a060020a03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef856040518082815260200191505060405180910390a35b5b5b509392505050565b60035460ff1681565b60005433600160a060020a039081169116146108505760006000fd5b6001805474ff00000000000000000000000000000000000000001916740100000000000000000000000000000000000000001790555b5b565b600080600261089a3660441461109d565b600554604080516000602091820181905282517ff019c267000000000000000000000000000000000000000000000000000000008152600160a060020a0333811660048301528a81166024830152604482018a90529351939094169363f019c267936064808301949391928390030190829087803b151561091757fe5b6102c65a03f1151561092557fe5b50506040515193505082156109e2576005546040805160006020918201819052825160e160020a636eb1769f028152600160a060020a0333811660048301528a811660248301529351939094169363dd62ed3e936044808301949391928390030190829087803b151561099457fe5b6102c65a03f115156109a257fe5b505060405180519350600160a060020a0380881692503316907f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92590602090a35b5b5b505092915050565b600080548190819033600160a060020a03908116911614610a0d5760006000fd5b84915081600160a060020a03166370a08231306000604051602001526040518263ffffffff1660e060020a0281526004018082600160a060020a0316600160a060020a03168152602001915050602060405180830381600087803b1515610a7057fe5b6102c65a03f11515610a7e57fe5b50505060405180519050905081600160a060020a031663a9059cbb85836000604051602001526040518363ffffffff1660e060020a0281526004018083600160a060020a0316600160a060020a0316815260200182815260200192505050602060405180830381600087803b1515610af257fe5b6102c65a03f11515610b0057fe5b505060405151159050610b605760408051600160a060020a0380881682528616602082015280820183905290517f977a8f1bdcf5f444d404662ea2c090d707ebcef1be61b37fe6ce74d0c6288fb89181900360600190a1600192506109e2565b600092505b5b505092915050565b600554604080516000602091820181905282517f70a08231000000000000000000000000000000000000000000000000000000008152600160a060020a0386811660048301529351919493909316926370a0823192602480830193919282900301818787803b1515610bdc57fe5b6102c65a03f11515610bea57fe5b5050604051519150505b919050565b60015433600160a060020a0390811691161415610886576001546000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a039092169190911790555b5b565b600054600160a060020a031681565b60005433600160a060020a03908116911614610c6e5760006000fd5b60015474010000000000000000000000000000000000000000900460ff1615610c975760006000fd5b6005805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0383161790555b5b5b50565b6004805460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561051a5780601f106104ef5761010080835404028352916020019161051a565b820191906000526020600020905b8154815290600101906020018083116104fd57829003601f168201915b505050505081565b60005433600160a060020a03908116911614610d6f5760006000fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0383161790555b5b50565b60006002610dac3660441461109d565b600554604080516000602091820181905282517fbeabacc8000000000000000000000000000000000000000000000000000000008152600160a060020a0333811660048301528981166024830152604482018990529351939094169363beabacc8936064808301949391928390030190829087803b1515610e2957fe5b6102c65a03f11515610e3757fe5b505060405151925050811561069c5783600160a060020a031633600160a060020a03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef856040518082815260200191505060405180910390a35b5b5b5092915050565b60015474010000000000000000000000000000000000000000900460ff1681565b6000806002610ecd3660441461109d565b600554604080516000602091820181905282517fbcdd6121000000000000000000000000000000000000000000000000000000008152600160a060020a0333811660048301528a81166024830152604482018a90529351939094169363bcdd6121936064808301949391928390030190829087803b151561091757fe5b6102c65a03f1151561092557fe5b50506040515193505082156109e2576005546040805160006020918201819052825160e160020a636eb1769f028152600160a060020a0333811660048301528a811660248301529351939094169363dd62ed3e936044808301949391928390030190829087803b151561099457fe5b6102c65a03f115156109a257fe5b505060405180519350600160a060020a0380881692503316907f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92590602090a35b5b5b505092915050565b6005546040805160006020918201819052825160e160020a636eb1769f028152600160a060020a038781166004830152868116602483015293519194939093169263dd62ed3e92604480830193919282900301818787803b151561107f57fe5b6102c65a03f1151561108d57fe5b5050604051519150505b92915050565b801515610cc05760006000fd5b5b505600a165627a7a72305820118e5ac4fac665130da14f4a5916a01588f24a5d6428bf9e3041dbfa1021fefd0029"},"TokenControllerLedger.sol:TokenReceivable":{"abi":"[{\"constant\":false,\"inputs\":[{\"name\":\"_token\",\"type\":\"address\"},{\"name\":\"_to\",\"type\":\"address\"}],\"name\":\"claimTokens\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"acceptOwnership\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newOwner\",\"type\":\"address\"}],\"name\":\"changeOwner\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"token\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"logTokenTransfer\",\"type\":\"event\"}]","bin":"60606040525b60008054600160a060020a03191633600160a060020a03161790555b5b610324806100316000396000f300606060405263ffffffff60e060020a60003504166369ffa08a811461004257806379ba5097146100785780638da5cb5b1461008a578063a6f9dae1146100b6575bfe5b341561004a57fe5b610064600160a060020a03600435811690602435166100d4565b604080519115158252519081900360200190f35b341561008057fe5b610088610256565b005b341561009257fe5b61009a6102a0565b60408051600160a060020a039092168252519081900360200190f35b34156100be57fe5b610088600160a060020a03600435166102af565b005b600080548190819033600160a060020a039081169116146100f55760006000fd5b84915081600160a060020a03166370a08231306000604051602001526040518263ffffffff1660e060020a0281526004018082600160a060020a0316600160a060020a03168152602001915050602060405180830381600087803b151561015857fe5b6102c65a03f1151561016657fe5b50505060405180519050905081600160a060020a031663a9059cbb85836000604051602001526040518363ffffffff1660e060020a0281526004018083600160a060020a0316600160a060020a0316815260200182815260200192505050602060405180830381600087803b15156101da57fe5b6102c65a03f115156101e857fe5b5050604051511590506102485760408051600160a060020a0380881682528616602082015280820183905290517f977a8f1bdcf5f444d404662ea2c090d707ebcef1be61b37fe6ce74d0c6288fb89181900360600190a16001925061024d565b600092505b5b505092915050565b60015433600160a060020a039081169116141561029d576001546000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a039092169190911790555b5b565b600054600160a060020a031681565b60005433600160a060020a039081169116146102cb5760006000fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0383161790555b5b505600a165627a7a72305820eda5e6f9a053705f29b7858a749b792a1935e7471fab48cad35674b8bc8a5ef00029"}},"version":"0.4.11+commit.68ef5810.Darwin.appleclang"};
