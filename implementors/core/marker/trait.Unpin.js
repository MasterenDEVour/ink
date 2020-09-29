(function() {var implementors = {};
implementors["ink_core"] = [{"text":"impl Unpin for ReturnFlags","synthetic":true,"types":[]},{"text":"impl Unpin for AccountId","synthetic":true,"types":[]},{"text":"impl Unpin for Hash","synthetic":true,"types":[]},{"text":"impl Unpin for EnvError","synthetic":true,"types":[]},{"text":"impl Unpin for DefaultEnvTypes","synthetic":true,"types":[]},{"text":"impl&lt;E, Callee, GasLimit, TransferredValue, Args, RetType&gt; Unpin for CallBuilder&lt;E, Callee, GasLimit, TransferredValue, Args, RetType&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Args: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;Callee: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;GasLimit: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;RetType: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;TransferredValue: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;E, Args, R&gt; Unpin for CallParams&lt;E, Args, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Args: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;E as EnvTypes&gt;::AccountId: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;E as EnvTypes&gt;::Balance: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;E, CodeHash, GasLimit, Endowment, Args, R&gt; Unpin for CreateBuilder&lt;E, CodeHash, GasLimit, Endowment, Args, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Args: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;CodeHash: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;Endowment: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;GasLimit: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;E, Args, R&gt; Unpin for CreateParams&lt;E, Args, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Args: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;E as EnvTypes&gt;::Balance: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;E as EnvTypes&gt;::Hash: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Args&gt; Unpin for ExecutionInput&lt;Args&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Args: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for Selector","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for ReturnType&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for Set&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for Unset&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;Head, Rest&gt; Unpin for ArgumentList&lt;Head, Rest&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Head: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;Rest: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for Argument&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for ArgumentListEnd","synthetic":true,"types":[]},{"text":"impl Unpin for CallData","synthetic":true,"types":[]},{"text":"impl Unpin for ChainSpec","synthetic":true,"types":[]},{"text":"impl Unpin for EmittedEvent","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for DefaultAccounts&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as EnvTypes&gt;::AccountId: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for Wrap&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;H, S&gt; Unpin for HashBuilder&lt;H, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for NoAccumulator","synthetic":true,"types":[]},{"text":"impl Unpin for Sha2x256Hasher","synthetic":true,"types":[]},{"text":"impl Unpin for Keccak256Hasher","synthetic":true,"types":[]},{"text":"impl Unpin for Blake2x256Hasher","synthetic":true,"types":[]},{"text":"impl Unpin for Blake2x128Hasher","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for Box&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for Vec&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for Lazy&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for Memory&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for Pack&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for DynamicAllocation","synthetic":true,"types":[]},{"text":"impl Unpin for ContractPhase","synthetic":true,"types":[]},{"text":"impl Unpin for BitStash","synthetic":true,"types":[]},{"text":"impl Unpin for Bitvec","synthetic":true,"types":[]},{"text":"impl&lt;K, V, H&gt; Unpin for HashMap&lt;K, V, H&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T, N&gt; Unpin for SmallVec&lt;T, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;N as ArrayLength&lt;CacheCell&lt;Option&lt;StorageEntry&lt;T&gt;&gt;&gt;&gt;&gt;::ArrayType: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for Stash&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for BitRefMut&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for ChunkRef&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for BitsIter&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for BitsIterMut&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V, H&gt; Unpin for Iter&lt;'a, K, V, H&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V, H&gt; Unpin for IterMut&lt;'a, K, V, H&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, K&gt; Unpin for Keys&lt;'a, K&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V, H&gt; Unpin for Values&lt;'a, K, V, H&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V, H&gt; Unpin for ValuesMut&lt;'a, K, V, H&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V&gt; Unpin for OccupiedEntry&lt;'a, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V&gt; Unpin for VacantEntry&lt;'a, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V&gt; Unpin for Entry&lt;'a, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T, N&gt; Unpin for Iter&lt;'a, T, N&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T, N&gt; Unpin for IterMut&lt;'a, T, N&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Unpin for Iter&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Unpin for IterMut&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl Unpin for VacantEntry","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for Entry&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Unpin for Iter&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Unpin for IterMut&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl Unpin for IndexOutOfBounds","synthetic":true,"types":[]},{"text":"impl&lt;T, N&gt; Unpin for LazyArray&lt;T, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;N as ArrayLength&lt;CacheCell&lt;Option&lt;StorageEntry&lt;T&gt;&gt;&gt;&gt;&gt;::ArrayType: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for LazyCell&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;V&gt; Unpin for LazyIndexMap&lt;V&gt;","synthetic":true,"types":[]},{"text":"impl&lt;K, V, H&gt; Unpin for LazyHashMap&lt;K, V, H&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V&gt; Unpin for OccupiedEntry&lt;'a, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V&gt; Unpin for VacantEntry&lt;'a, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V&gt; Unpin for Entry&lt;'a, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Unpin,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["ink_lang"] = [{"text":"impl Unpin for AcceptsPayments","synthetic":true,"types":[]},{"text":"impl Unpin for EnablesDynamicStorageAllocator","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Unpin for EnvAccess&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl Unpin for DispatchRetCode","synthetic":true,"types":[]},{"text":"impl Unpin for DispatchMode","synthetic":true,"types":[]},{"text":"impl Unpin for NeverReturns","synthetic":true,"types":[]},{"text":"impl Unpin for DispatchError","synthetic":true,"types":[]}];
implementors["ink_metadata"] = [{"text":"impl&lt;F&gt; Unpin for ConstructorSpec&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::TypeId: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Selector&gt; Unpin for ConstructorSpecBuilder&lt;Selector&gt;","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Unpin for ContractSpec&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::TypeId: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Unpin for ContractSpecBuilder&lt;S&gt;","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Unpin for EventParamSpec&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::TypeId: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for EventParamSpecBuilder","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Unpin for EventSpec&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::TypeId: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for EventSpecBuilder","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Unpin for MessageParamSpec&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::TypeId: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for MessageParamSpecBuilder","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Unpin for MessageSpec&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::TypeId: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Selector, Mutates, IsPayable, Returns&gt; Unpin for MessageSpecBuilder&lt;Selector, Mutates, IsPayable, Returns&gt;","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Unpin for ReturnTypeSpec&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::TypeId: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Unpin for TypeSpec&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::TypeId: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for InkProject","synthetic":true,"types":[]},{"text":"impl Unpin for LayoutKey","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Unpin for CellLayout&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::TypeId: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Unpin for HashLayout&lt;F&gt;","synthetic":true,"types":[]},{"text":"impl Unpin for HashingStrategy","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Unpin for ArrayLayout&lt;F&gt;","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Unpin for StructLayout&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::TypeId: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Unpin for FieldLayout&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::TypeId: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for Discriminant","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Unpin for EnumLayout&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::TypeId: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Unpin for Layout&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::TypeId: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for CryptoHasher","synthetic":true,"types":[]}];
implementors["ink_primitives"] = [{"text":"impl Unpin for Key","synthetic":true,"types":[]},{"text":"impl Unpin for KeyPtr","synthetic":true,"types":[]}];
implementors["scale_info"] = [{"text":"impl Unpin for MetaType","synthetic":true,"types":[]},{"text":"impl Unpin for Registry","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Unpin for TypeDefComposite&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::TypeId: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Unpin for Field&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::TypeId: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for Path","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Unpin for TypeDefVariant&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::TypeId: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Unpin for Variant&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::TypeId: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Unpin for Type&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::TypeId: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Unpin for TypeDefArray&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::TypeId: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Unpin for TypeDefTuple&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::TypeId: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Unpin for TypeDefSequence&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::TypeId: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for PathError","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Unpin for TypeDef&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::TypeId: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for TypeDefPrimitive","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Unpin for TypeBuilder&lt;S&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for FieldsBuilder&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for VariantsBuilder&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl Unpin for NoFields","synthetic":true,"types":[]},{"text":"impl Unpin for NamedFields","synthetic":true,"types":[]},{"text":"impl Unpin for UnnamedFields","synthetic":true,"types":[]},{"text":"impl Unpin for Fields","synthetic":true,"types":[]},{"text":"impl Unpin for NoVariants","synthetic":true,"types":[]},{"text":"impl Unpin for VariantFields","synthetic":true,"types":[]},{"text":"impl Unpin for Fieldless","synthetic":true,"types":[]},{"text":"impl Unpin for Variants","synthetic":true,"types":[]},{"text":"impl Unpin for PathNotAssigned","synthetic":true,"types":[]},{"text":"impl Unpin for PathAssigned","synthetic":true,"types":[]},{"text":"impl Unpin for MetaForm","synthetic":true,"types":[]},{"text":"impl Unpin for CompactForm","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for UntrackedSymbol&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Unpin for Symbol&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for Interner&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()