(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["binary-live-api"] = factory();
	else
		root["binary-live-api"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { throw err; };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var LiveEvents = function () {
	    function LiveEvents() {
	        _classCallCheck(this, LiveEvents);
	
	        this.messageHandlers = {};
	    }
	
	    _createClass(LiveEvents, [{
	        key: 'emitSingle',
	        value: function emitSingle(msgType, msgData) {
	            var handlers = this.messageHandlers[msgType] || [];
	            handlers.forEach(function (handler) {
	                handler(msgData);
	            });
	        }
	    }, {
	        key: 'emitWildcard',
	        value: function emitWildcard(msgData) {
	            var handlers = this.messageHandlers['*'] || [];
	            handlers.forEach(function (handler) {
	                handler(msgData);
	            });
	        }
	    }, {
	        key: 'emit',
	        value: function emit(msgType, msgData) {
	            this.emitSingle(msgType, msgData);
	            this.emitWildcard(msgData);
	        }
	    }, {
	        key: 'on',
	        value: function on(msgType, callback) {
	            if (!this.messageHandlers[msgType]) {
	                this.messageHandlers[msgType] = [callback];
	            } else {
	                this.messageHandlers[msgType].push(callback);
	            }
	        }
	    }]);
	
	    return LiveEvents;
	}();

	exports.default = LiveEvents;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.OAuth = exports.LiveApi = exports.LiveEvents = undefined;
	
	var _LiveEvents2 = __webpack_require__(0);
	
	var _LiveEvents3 = _interopRequireDefault(_LiveEvents2);
	
	var _LiveApi2 = __webpack_require__(2);
	
	var _LiveApi3 = _interopRequireDefault(_LiveApi2);
	
	var _OAuth2 = __webpack_require__(4);
	
	var _OAuth = _interopRequireWildcard(_OAuth2);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.LiveEvents = _LiveEvents3.default;
	exports.LiveApi = _LiveApi3.default;
	exports.OAuth = _OAuth;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _LiveEvents = __webpack_require__(0);
	
	var _LiveEvents2 = _interopRequireDefault(_LiveEvents);
	
	var _LiveError = __webpack_require__(3);
	
	var _LiveError2 = _interopRequireDefault(_LiveError);
	
	var _calls = __webpack_require__(6);
	
	var calls = _interopRequireWildcard(_calls);
	
	var _stateful = __webpack_require__(11);
	
	var stateful = _interopRequireWildcard(_stateful);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MockWebSocket = function MockWebSocket() {};
	var WebSocket = typeof window !== 'undefined' ? window.WebSocket : MockWebSocket;
	
	var shouldIgnoreError = function shouldIgnoreError(error) {
	    return error.message.includes('You are already subscribed to') || error.message.includes('Input validation failed: forget');
	};
	
	var LiveApi = function () {
	    function LiveApi() {
	        var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	        var _ref$apiUrl = _ref.apiUrl;
	        var apiUrl = _ref$apiUrl === undefined ? 'wss://ws.binaryws.com/websockets/v3' : _ref$apiUrl;
	        var _ref$language = _ref.language;
	        var language = _ref$language === undefined ? 'en' : _ref$language;
	        var websocket = _ref.websocket;
	
	        _classCallCheck(this, LiveApi);
	
	        this.apiUrl = apiUrl;
	        this.language = language;
	
	        if (websocket) {
	            WebSocket = websocket;
	        }
	
	        this.status = LiveApi.Status.Unknown;
	
	        this.bufferedSends = [];
	        this.bufferedExecutes = [];
	        this.unresolvedPromises = {};
	
	        this.events = new _LiveEvents2.default();
	
	        this.bindCallsAndStateMutators();
	
	        this.connect();
	    }
	
	    _createClass(LiveApi, [{
	        key: 'bindCallsAndStateMutators',
	        value: function bindCallsAndStateMutators() {
	            var _this = this;
	
	            Object.keys(calls).forEach(function (callName) {
	                _this[callName] = function () {
	                    if (stateful[callName]) {
	                        stateful[callName].apply(stateful, arguments);
	                    }
	                    return _this.send(calls[callName].apply(calls, arguments));
	                };
	            });
	        }
	    }, {
	        key: 'connect',
	        value: function connect() {
	            this.socket = new WebSocket(this.apiUrl + '?l=' + this.language);
	            this.socket.onopen = this.onOpen.bind(this);
	            this.socket.onclose = this.onClose.bind(this);
	            this.socket.onerror = this.onError.bind(this);
	            this.socket.onmessage = this.onMessage.bind(this);
	
	            this.resubscribe();
	        }
	    }, {
	        key: 'disconnect',
	        value: function disconnect() {
	            this.token = '';
	            this.socket.onclose = undefined;
	            this.socket.close();
	        }
	    }, {
	        key: 'resubscribe',
	        value: function resubscribe() {
	            var _this2 = this;
	
	            var _stateful$getState = stateful.getState();
	
	            var token = _stateful$getState.token;
	            var balance = _stateful$getState.balance;
	            var portfolio = _stateful$getState.portfolio;
	            var transactions = _stateful$getState.transactions;
	            var ticks = _stateful$getState.ticks;
	            var proposals = _stateful$getState.proposals;
	
	
	            if (token) {
	                this.authorize(token);
	            }
	
	            ticks.forEach(function (tick) {
	                return _this2.subscribeToTick(tick);
	            });
	
	            proposals.forEach(function (proposal) {
	                return _this2.subscribeToPriceForContractProposal(proposal);
	            });
	
	            var delayedCallAfterAuthSuccess = function delayedCallAfterAuthSuccess() {
	                if (balance) {
	                    _this2.subscribeToBalance();
	                }
	
	                if (transactions) {
	                    _this2.subscribeToTransactions();
	                }
	
	                if (portfolio) {
	                    _this2.subscribeToAllOpenContracts();
	                }
	
	                _this2.onAuth = undefined;
	            };
	            this.onAuth = delayedCallAfterAuthSuccess;
	        }
	    }, {
	        key: 'changeLanguage',
	        value: function changeLanguage(ln) {
	            if (ln === this.language) {
	                return;
	            }
	            this.socket.onclose = undefined;
	            this.socket.close();
	            this.language = ln;
	            this.connect();
	        }
	    }, {
	        key: 'isReady',
	        value: function isReady() {
	            return this.socket && this.socket.readyState === 1;
	        }
	    }, {
	        key: 'sendBufferedSends',
	        value: function sendBufferedSends() {
	            while (this.bufferedSends.length > 0) {
	                this.socket.send(JSON.stringify(this.bufferedSends.shift()));
	            }
	        }
	    }, {
	        key: 'executeBufferedExecutes',
	        value: function executeBufferedExecutes() {
	            while (this.bufferedExecutes.length > 0) {
	                this.bufferedExecutes.shift()();
	            }
	        }
	    }, {
	        key: 'onOpen',
	        value: function onOpen() {
	            this.sendBufferedSends();
	            this.executeBufferedExecutes();
	        }
	    }, {
	        key: 'onClose',
	        value: function onClose() {
	            var _this3 = this;
	
	            setTimeout(function () {
	                _this3.connect();
	                _this3.resubscribe();
	            }, 1000);
	        }
	    }, {
	        key: 'onError',
	        value: function onError(error) {
	            // for process manager like pm2.
	            // It's necessary to print error with console.error.
	            // It will make error readable on error.log
	            window.console.error(error);
	
	            // And also make process exiting to respawn.
	            if (typeof process === 'function') {
	                process.exit();
	            }
	        }
	    }, {
	        key: 'resolvePromiseForResponse',
	        value: function resolvePromiseForResponse(json) {
	            if (!json.req_id) {
	                return Promise.resolve();
	            }
	
	            var reqId = json.req_id.toString();
	            var promise = this.unresolvedPromises[reqId];
	
	            if (!promise) {
	                return Promise.resolve();
	            }
	
	            delete this.unresolvedPromises[reqId];
	            if (!json.error) {
	                return promise.resolve(json);
	            }
	
	            if (!shouldIgnoreError(json.error)) {
	                return promise.reject(new _LiveError2.default(json.error));
	            }
	
	            return Promise.resolve();
	        }
	    }, {
	        key: 'onMessage',
	        value: function onMessage(message) {
	            var json = JSON.parse(message.data);
	
	            if (!json.error) {
	                if (json.msg_type === 'authorize' && this.onAuth) {
	                    this.onAuth();
	                }
	                this.events.emit(json.msg_type, json);
	            } else {
	                this.events.emit('error', json);
	            }
	
	            return this.resolvePromiseForResponse(json);
	        }
	    }, {
	        key: 'generatePromiseForRequest',
	        value: function generatePromiseForRequest(json) {
	            var _this4 = this;
	
	            var reqId = json.req_id.toString();
	
	            return new Promise(function (resolve, reject) {
	                _this4.unresolvedPromises[reqId] = { resolve: resolve, reject: reject };
	            });
	        }
	    }, {
	        key: 'sendRaw',
	        value: function sendRaw(json) {
	            if (this.isReady()) {
	                this.socket.send(JSON.stringify(json));
	            } else {
	                this.bufferedSends.push(json);
	            }
	
	            if (json.req_id) {
	                return this.generatePromiseForRequest(json);
	            }
	        }
	    }, {
	        key: 'send',
	        value: function send(json) {
	            var reqId = Math.floor(Math.random() * 1e15);
	            return this.sendRaw(_extends({
	                req_id: reqId
	            }, json));
	        }
	    }, {
	        key: 'execute',
	        value: function execute(func) {
	            if (this.isReady()) {
	                func();
	            } else {
	                this.bufferedExecutes.push(func);
	            }
	        }
	    }]);
	
	    return LiveApi;
	}();
	
	LiveApi.Status = {
	    Unknown: 'unknown',
	    Connected: 'connected'
	};
	exports.default = LiveApi;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var LiveError = function (_Error) {
	    _inherits(LiveError, _Error);
	
	    function LiveError(errorObj) {
	        _classCallCheck(this, LiveError);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(LiveError).call(this));
	
	        _this.message = "Server Error: (" + errorObj.code + ") " + errorObj.message + ", caused by " + errorObj.echo_req;
	        _this.stack = new Error().stack;
	        _this.name = _this.constructor.name;
	        return _this;
	    }
	
	    return LiveError;
	}(Error);
	
	exports.default = LiveError;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var oauthUrl = exports.oauthUrl = function oauthUrl(appId) {
	    return 'https://www.binary.com/oauth2/authorize?app_id=' + appId;
	};
	
	var oauthUrlWithLanguage = exports.oauthUrlWithLanguage = function oauthUrlWithLanguage(appId, langCode) {
	    return 'https://www.binary.com/oauth2/authorize?app_id=' + appId + '&l=' + langCode;
	};
	
	var parseOAuthResponse = exports.parseOAuthResponse = function parseOAuthResponse(responseUrl) {
	    var matcher = /acct\d=(\w+)&token\d=([\w-]+)/g;
	    var urlParts = responseUrl.split('/redirect?');
	    if (urlParts.length !== 2) throw new Error('Not a valid url');
	
	    var params = urlParts[1].split(matcher);
	
	    var accounts = [];
	
	    for (var i = 1; i < params.length; i += 3) {
	        accounts.push({
	            account: params[i],
	            token: params[i + 1]
	        });
	    }
	
	    return accounts;
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var deleteApiToken = exports.deleteApiToken = function deleteApiToken(token) {
	    return {
	        api_token: 1,
	        delete_token: token
	    };
	};
	
	var getApiTokens = exports.getApiTokens = function getApiTokens() {
	    return {
	        api_token: 1
	    };
	};
	
	var createApiToken = exports.createApiToken = function createApiToken(token, scopes) {
	    return {
	        api_token: 1,
	        new_token: token,
	        new_token_scopes: scopes
	    };
	};
	
	var registerApplication = exports.registerApplication = function registerApplication(options) {
	    return _extends({
	        app_register: 1
	    }, options);
	};
	
	var getAllAppList = exports.getAllAppList = function getAllAppList() {
	    return {
	        app_list: 1
	    };
	};
	
	var getAppslistById = exports.getAppslistById = function getAppslistById(appid) {
	    return {
	        app_get: appid
	    };
	};
	
	var deleteApplication = exports.deleteApplication = function deleteApplication(appid) {
	    return {
	        app_delete: appid
	    };
	};
	
	var createRealAccountMaltaInvest = exports.createRealAccountMaltaInvest = function createRealAccountMaltaInvest(options) {
	    return _extends({
	        new_account_maltainvest: 1
	    }, options);
	};
	
	var createRealAccount = exports.createRealAccount = function createRealAccount(options) {
	    return _extends({
	        new_account_real: 1
	    }, options);
	};
	
	var setAccountCurrency = exports.setAccountCurrency = function setAccountCurrency(currency) {
	    return {
	        set_account_currency: currency
	    };
	};
	
	var setSelfExclusion = exports.setSelfExclusion = function setSelfExclusion(options) {
	    return _extends({
	        set_self_exclusion: 1
	    }, options);
	};
	
	var setAccountSettings = exports.setAccountSettings = function setAccountSettings(options) {
	    return _extends({
	        set_settings: 1
	    }, options);
	};
	
	var setTnCApproval = exports.setTnCApproval = function setTnCApproval() {
	    return {
	        tnc_approval: 1
	    };
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _unauthenticated = __webpack_require__(10);
	
	Object.keys(_unauthenticated).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _unauthenticated[key];
	    }
	  });
	});
	
	var _read = __webpack_require__(8);
	
	Object.keys(_read).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _read[key];
	    }
	  });
	});
	
	var _trade = __webpack_require__(9);
	
	Object.keys(_trade).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _trade[key];
	    }
	  });
	});
	
	var _payments = __webpack_require__(7);
	
	Object.keys(_payments).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _payments[key];
	    }
	  });
	});
	
	var _admin = __webpack_require__(5);
	
	Object.keys(_admin).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _admin[key];
	    }
	  });
	});

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var getCashierLockStatus = exports.getCashierLockStatus = function getCashierLockStatus() {
	    return {
	        cashier_password: 1
	    };
	};
	
	var setCashierLock = exports.setCashierLock = function setCashierLock(options) {
	    return _extends({
	        cashier_password: 1
	    }, options);
	};
	
	var withdrawToPaymentAgent = exports.withdrawToPaymentAgent = function withdrawToPaymentAgent(options) {
	    return _extends({
	        paymentagent_withdraw: 1
	    }, options);
	};
	
	var paymentAgentTransfer = exports.paymentAgentTransfer = function paymentAgentTransfer(options) {
	    return _extends({
	        paymentagent_transfer: 1
	    }, options);
	};
	
	var transferBetweenAccounts = exports.transferBetweenAccounts = function transferBetweenAccounts(options) {
	    return _extends({
	        transfer_between_accounts: 1
	    }, options);
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var getAccountLimits = exports.getAccountLimits = function getAccountLimits() {
	    return {
	        get_limits: 1
	    };
	};
	
	var getAccountSettings = exports.getAccountSettings = function getAccountSettings() {
	    return {
	        get_settings: 1
	    };
	};
	
	var getAccountStatus = exports.getAccountStatus = function getAccountStatus() {
	    return {
	        get_account_status: 1
	    };
	};
	
	var getSelfExclusion = exports.getSelfExclusion = function getSelfExclusion() {
	    return {
	        get_self_exclusion: 1
	    };
	};
	
	var logOut = exports.logOut = function logOut() {
	    return {
	        logout: 1
	    };
	};
	
	var getStatement = exports.getStatement = function getStatement(options) {
	    return _extends({
	        statement: 1
	    }, options);
	};
	
	var getPortfolio = exports.getPortfolio = function getPortfolio() {
	    return {
	        portfolio: 1
	    };
	};
	
	var getProfitTable = exports.getProfitTable = function getProfitTable(options) {
	    return _extends({
	        profit_table: 1
	    }, options);
	};
	
	var subscribeToBalance = exports.subscribeToBalance = function subscribeToBalance() {
	    return {
	        balance: 1,
	        subscribe: 1
	    };
	};
	
	var unsubscribeFromBalance = exports.unsubscribeFromBalance = function unsubscribeFromBalance() {
	    return {
	        balance: 1,
	        subscribe: 0
	    };
	};
	
	var subscribeToOpenContract = exports.subscribeToOpenContract = function subscribeToOpenContract(contractId) {
	    return {
	        proposal_open_contract: 1,
	        subscribe: 1,
	        contract_id: contractId
	    };
	};
	
	var subscribeToAllOpenContracts = exports.subscribeToAllOpenContracts = function subscribeToAllOpenContracts() {
	    return {
	        proposal_open_contract: 1,
	        subscribe: 1
	    };
	};
	
	var unsubscribeFromAllOpenContracts = exports.unsubscribeFromAllOpenContracts = function unsubscribeFromAllOpenContracts() {
	    return {
	        proposal_open_contract: 1,
	        subscribe: 0
	    };
	};
	
	var subscribeToTransactions = exports.subscribeToTransactions = function subscribeToTransactions() {
	    return {
	        transaction: 1,
	        subscribe: 1
	    };
	};
	
	var unsubscribeFromTransactions = exports.unsubscribeFromTransactions = function unsubscribeFromTransactions() {
	    return {
	        transaction: 1,
	        subscribe: 0
	    };
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var buyContract = exports.buyContract = function buyContract(contractId, price) {
	    return {
	        buy: contractId,
	        price: price
	    };
	};
	
	var sellContract = exports.sellContract = function sellContract(contractId, price) {
	    return {
	        sell: contractId,
	        price: price
	    };
	};
	
	var sellExpiredContracts = exports.sellExpiredContracts = function sellExpiredContracts() {
	    return {
	        sell_expired: 1
	    };
	};
	
	var topUpVirtualAccount = exports.topUpVirtualAccount = function topUpVirtualAccount() {
	    return {
	        topup_virtual: 1
	    };
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var getActiveSymbolsBrief = exports.getActiveSymbolsBrief = function getActiveSymbolsBrief() {
	    return {
	        active_symbols: 'brief'
	    };
	};
	
	var getActiveSymbolsFull = exports.getActiveSymbolsFull = function getActiveSymbolsFull() {
	    return {
	        active_symbols: 'full'
	    };
	};
	
	var getAssetIndex = exports.getAssetIndex = function getAssetIndex() {
	    return {
	        asset_index: 1
	    };
	};
	
	var authorize = exports.authorize = function authorize(token) {
	    return {
	        authorize: token
	    };
	};
	
	var getContractsForSymbol = exports.getContractsForSymbol = function getContractsForSymbol(symbol) {
	    return {
	        contracts_for: symbol
	    };
	};
	
	var unsubscribeFromTick = exports.unsubscribeFromTick = function unsubscribeFromTick(symbol) {
	    return {
	        forget: symbol
	    };
	};
	
	var unsubscribeFromTicks = exports.unsubscribeFromTicks = function unsubscribeFromTicks(symbols) {
	    return symbols.forEach(undefined.unsubscribeFromTick);
	};
	
	var unsubscribeByID = exports.unsubscribeByID = function unsubscribeByID(id) {
	    return {
	        forget: id
	    };
	};
	
	var unsubscribeFromAllTicks = exports.unsubscribeFromAllTicks = function unsubscribeFromAllTicks() {
	    return {
	        forget_all: 'ticks'
	    };
	};
	
	var unsubscribeFromAllProposals = exports.unsubscribeFromAllProposals = function unsubscribeFromAllProposals() {
	    return {
	        forget_all: 'proposal'
	    };
	};
	
	var unsubscribeFromAllPortfolios = exports.unsubscribeFromAllPortfolios = function unsubscribeFromAllPortfolios() {
	    return {
	        forget_all: 'portfolio'
	    };
	};
	
	var unsubscribeFromAlProposals = exports.unsubscribeFromAlProposals = function unsubscribeFromAlProposals() {
	    return {
	        forget_all: 'proposal_open_contract'
	    };
	};
	
	var getLandingCompany = exports.getLandingCompany = function getLandingCompany(landingCompany) {
	    return {
	        landing_company: landingCompany
	    };
	};
	
	var getLandingCompanyDetails = exports.getLandingCompanyDetails = function getLandingCompanyDetails(landingCompany) {
	    return {
	        landing_company_details: landingCompany
	    };
	};
	
	var createVirtualAccount = exports.createVirtualAccount = function createVirtualAccount(options) {
	    return _extends({
	        new_account_virtual: 1
	    }, options);
	};
	
	var ping = exports.ping = function ping() {
	    return {
	        ping: 1
	    };
	};
	
	var getPaymentAgentsForCountry = exports.getPaymentAgentsForCountry = function getPaymentAgentsForCountry(countryCode) {
	    return {
	        paymentagent_list: countryCode
	    };
	};
	
	var getPayoutCurrencies = exports.getPayoutCurrencies = function getPayoutCurrencies() {
	    return {
	        payout_currencies: 1
	    };
	};
	
	var getPriceProposalForContract = exports.getPriceProposalForContract = function getPriceProposalForContract(options) {
	    return _extends({
	        proposal: 1
	    }, options);
	};
	
	var subscribeToPriceForContractProposal = exports.subscribeToPriceForContractProposal = function subscribeToPriceForContractProposal(options) {
	    return _extends({
	        proposal: 1,
	        subscribe: 1
	    }, options);
	};
	
	var getResidences = exports.getResidences = function getResidences() {
	    return {
	        residence_list: 1
	    };
	};
	
	var getStatesForCountry = exports.getStatesForCountry = function getStatesForCountry(countryCode) {
	    return {
	        states_list: countryCode
	    };
	};
	
	var subscribeToTick = exports.subscribeToTick = function subscribeToTick(symbol) {
	    return {
	        ticks: symbol
	    };
	};
	
	var subscribeToTicks = exports.subscribeToTicks = function subscribeToTicks(symbols) {
	    return {
	        ticks: symbols
	    };
	};
	
	var getTickHistory = exports.getTickHistory = function getTickHistory(symbol, options) {
	    return _extends({
	        ticks_history: symbol
	    }, options || { end: 'latest' });
	};
	
	var getCandles = exports.getCandles = function getCandles(symbol, options) {
	    return _extends({
	        ticks_history: symbol,
	        style: 'candles'
	    }, options || { end: 'latest' });
	};
	
	var getCandlesForLastNDays = exports.getCandlesForLastNDays = function getCandlesForLastNDays(symbol, ndays) {
	    return {
	        ticks_history: symbol,
	        style: 'candles',
	        start: Math.floor(Date.now() / 1000) - (ndays - 1) * 60 * 60 * 24,
	        end: 'latest',
	        granularity: 60 * 60 * 24,
	        count: 30
	    };
	};
	
	var getServerTime = exports.getServerTime = function getServerTime() {
	    return {
	        time: 1
	    };
	};
	
	var getTradingTimes = exports.getTradingTimes = function getTradingTimes(date) {
	    return {
	        trading_times: date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
	    };
	};
	
	var verifyEmail = exports.verifyEmail = function verifyEmail(email, type) {
	    return {
	        verify_email: email,
	        type: type
	    };
	};
	
	var getWebsiteStatus = exports.getWebsiteStatus = function getWebsiteStatus() {
	    return {
	        website_status: 1
	    };
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var getInitialState = function getInitialState() {
	    return {
	        token: '',
	        balance: false,
	        portfolio: false,
	        transactions: false,
	        ticks: new Set(),
	        proposals: new Set()
	    };
	};
	
	var state = getInitialState();
	
	var resetState = exports.resetState = function resetState() {
	    state = getInitialState();
	};
	
	var getState = exports.getState = function getState() {
	    return state;
	};
	
	var authorize = exports.authorize = function authorize(token) {
	    state.token = token;
	};
	
	var subscribeToBalance = exports.subscribeToBalance = function subscribeToBalance() {
	    state.balance = true;
	};
	
	var unsubscribeFromBalance = exports.unsubscribeFromBalance = function unsubscribeFromBalance() {
	    state.balance = false;
	};
	
	// export const subscribeToOpenContract = contractId => {
	//     state.portfolio.add(contractId);
	// };
	
	var subscribeToAllOpenContracts = exports.subscribeToAllOpenContracts = function subscribeToAllOpenContracts() {
	    state.portfolio = true;
	};
	
	var unsubscribeFromAllOpenContracts = exports.unsubscribeFromAllOpenContracts = function unsubscribeFromAllOpenContracts() {
	    state.portfolio = false;
	};
	
	var subscribeToTransactions = exports.subscribeToTransactions = function subscribeToTransactions() {
	    state.transactions = true;
	};
	
	var unsubscribeFromTransactions = exports.unsubscribeFromTransactions = function unsubscribeFromTransactions() {
	    state.transactions = false;
	};
	
	var subscribeToTick = exports.subscribeToTick = function subscribeToTick(symbol) {
	    state.ticks.add(symbol);
	};
	
	var subscribeToTicks = exports.subscribeToTicks = function subscribeToTicks(symbols) {
	    var _state$ticks;
	
	    (_state$ticks = state.ticks).add.apply(_state$ticks, _toConsumableArray(symbols));
	};
	
	var unsubscribeFromTick = exports.unsubscribeFromTick = function unsubscribeFromTick(symbol) {
	    state.ticks.delete(symbol);
	};
	
	var unsubscribeFromAllTicks = exports.unsubscribeFromAllTicks = function unsubscribeFromAllTicks() {
	    state.ticks.clear();
	};
	
	var subscribeToPriceForContractProposal = exports.subscribeToPriceForContractProposal = function subscribeToPriceForContractProposal(options) {
	    state.proposals.add(options);
	};
	
	var unsubscribeFromAllProposals = exports.unsubscribeFromAllProposals = function unsubscribeFromAllProposals() {
	    state.proposals.clear();
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }
/******/ ])
});
;
//# sourceMappingURL=binary-live-api.js.map