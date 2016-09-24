'use strict';

var keystone = require('keystone');
var transform = require('model-transform');
var Types = keystone.Field.Types;

var Admin = new keystone.List('Admin');

Admin.add({
  name: { type: String, initial: true },
  email: { type: Types.Email, initial: true, index: true },
  password: { type: Types.Password, initial: true }
}, 'Permissions', {
  isAdmin: { type: Boolean, label: 'Can access Keystone', index: true }
});

// Provide access to Keystone
Admin.schema.virtual('canAccessKeystone').get(function () {
  return this.isAdmin;
});

transform.toJSON(Admin);

Admin.defaultColumns = 'hash, name, email, isAdmin';
Admin.register();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvQWRtaW4uanMiXSwibmFtZXMiOlsia2V5c3RvbmUiLCJyZXF1aXJlIiwidHJhbnNmb3JtIiwiVHlwZXMiLCJGaWVsZCIsIkFkbWluIiwiTGlzdCIsImFkZCIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwiaW5pdGlhbCIsImVtYWlsIiwiRW1haWwiLCJpbmRleCIsInBhc3N3b3JkIiwiUGFzc3dvcmQiLCJpc0FkbWluIiwiQm9vbGVhbiIsImxhYmVsIiwic2NoZW1hIiwidmlydHVhbCIsImdldCIsInRvSlNPTiIsImRlZmF1bHRDb2x1bW5zIiwicmVnaXN0ZXIiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsV0FBV0MsUUFBUSxVQUFSLENBQWY7QUFDQSxJQUFJQyxZQUFZRCxRQUFRLGlCQUFSLENBQWhCO0FBQ0EsSUFBSUUsUUFBUUgsU0FBU0ksS0FBVCxDQUFlRCxLQUEzQjs7QUFFQSxJQUFJRSxRQUFRLElBQUlMLFNBQVNNLElBQWIsQ0FBa0IsT0FBbEIsQ0FBWjs7QUFFQUQsTUFBTUUsR0FBTixDQUFVO0FBQ1JDLFFBQU0sRUFBRUMsTUFBTUMsTUFBUixFQUFnQkMsU0FBUyxJQUF6QixFQURFO0FBRVJDLFNBQU8sRUFBRUgsTUFBTU4sTUFBTVUsS0FBZCxFQUFxQkYsU0FBUyxJQUE5QixFQUFvQ0csT0FBTyxJQUEzQyxFQUZDO0FBR1JDLFlBQVUsRUFBRU4sTUFBTU4sTUFBTWEsUUFBZCxFQUF3QkwsU0FBUyxJQUFqQztBQUhGLENBQVYsRUFJRyxhQUpILEVBSWtCO0FBQ2hCTSxXQUFTLEVBQUVSLE1BQU1TLE9BQVIsRUFBaUJDLE9BQU8scUJBQXhCLEVBQStDTCxPQUFPLElBQXREO0FBRE8sQ0FKbEI7O0FBUUE7QUFDQVQsTUFBTWUsTUFBTixDQUFhQyxPQUFiLENBQXFCLG1CQUFyQixFQUEwQ0MsR0FBMUMsQ0FBOEMsWUFBVztBQUN2RCxTQUFPLEtBQUtMLE9BQVo7QUFDRCxDQUZEOztBQUlBZixVQUFVcUIsTUFBVixDQUFpQmxCLEtBQWpCOztBQUVBQSxNQUFNbUIsY0FBTixHQUF1Qiw0QkFBdkI7QUFDQW5CLE1BQU1vQixRQUFOIiwiZmlsZSI6IkFkbWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGtleXN0b25lID0gcmVxdWlyZSgna2V5c3RvbmUnKTtcbnZhciB0cmFuc2Zvcm0gPSByZXF1aXJlKCdtb2RlbC10cmFuc2Zvcm0nKTtcbnZhciBUeXBlcyA9IGtleXN0b25lLkZpZWxkLlR5cGVzO1xuXG52YXIgQWRtaW4gPSBuZXcga2V5c3RvbmUuTGlzdCgnQWRtaW4nKTtcblxuQWRtaW4uYWRkKHtcbiAgbmFtZTogeyB0eXBlOiBTdHJpbmcsIGluaXRpYWw6IHRydWUgfSxcbiAgZW1haWw6IHsgdHlwZTogVHlwZXMuRW1haWwsIGluaXRpYWw6IHRydWUsIGluZGV4OiB0cnVlIH0sXG4gIHBhc3N3b3JkOiB7IHR5cGU6IFR5cGVzLlBhc3N3b3JkLCBpbml0aWFsOiB0cnVlIH0sXG59LCAnUGVybWlzc2lvbnMnLCB7XG4gIGlzQWRtaW46IHsgdHlwZTogQm9vbGVhbiwgbGFiZWw6ICdDYW4gYWNjZXNzIEtleXN0b25lJywgaW5kZXg6IHRydWUgfSxcbn0pO1xuXG4vLyBQcm92aWRlIGFjY2VzcyB0byBLZXlzdG9uZVxuQWRtaW4uc2NoZW1hLnZpcnR1YWwoJ2NhbkFjY2Vzc0tleXN0b25lJykuZ2V0KGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5pc0FkbWluO1xufSk7XG5cbnRyYW5zZm9ybS50b0pTT04oQWRtaW4pO1xuXG5BZG1pbi5kZWZhdWx0Q29sdW1ucyA9ICdoYXNoLCBuYW1lLCBlbWFpbCwgaXNBZG1pbic7XG5BZG1pbi5yZWdpc3RlcigpO1xuIl19