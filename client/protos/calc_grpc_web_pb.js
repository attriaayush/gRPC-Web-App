/**
 * @fileoverview gRPC-Web generated client stub for calc
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.calc = require('./calc_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.calc.CalculatorClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.calc.CalculatorPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.calc.AddRequest,
 *   !proto.calc.AddResponse>}
 */
const methodDescriptor_Calculator_Add = new grpc.web.MethodDescriptor(
  '/calc.Calculator/Add',
  grpc.web.MethodType.UNARY,
  proto.calc.AddRequest,
  proto.calc.AddResponse,
  /**
   * @param {!proto.calc.AddRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.calc.AddResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.calc.AddRequest,
 *   !proto.calc.AddResponse>}
 */
const methodInfo_Calculator_Add = new grpc.web.AbstractClientBase.MethodInfo(
  proto.calc.AddResponse,
  /**
   * @param {!proto.calc.AddRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.calc.AddResponse.deserializeBinary
);


/**
 * @param {!proto.calc.AddRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.calc.AddResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.calc.AddResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.calc.CalculatorClient.prototype.add =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/calc.Calculator/Add',
      request,
      metadata || {},
      methodDescriptor_Calculator_Add,
      callback);
};


/**
 * @param {!proto.calc.AddRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.calc.AddResponse>}
 *     A native promise that resolves to the response
 */
proto.calc.CalculatorPromiseClient.prototype.add =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/calc.Calculator/Add',
      request,
      metadata || {},
      methodDescriptor_Calculator_Add);
};


module.exports = proto.calc;

