// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.33.0-devel
// 	protoc        v4.25.3
// source: github.com/aperturerobotics/starpc/e2e/mock/mock.proto

package e2e_mock

import (
	reflect "reflect"
	sync "sync"

	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// MockMsg is the mock message body.
type MockMsg struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Body string `protobuf:"bytes,1,opt,name=body,proto3" json:"body,omitempty"`
}

func (x *MockMsg) Reset() {
	*x = MockMsg{}
	if protoimpl.UnsafeEnabled {
		mi := &file_github_com_aperturerobotics_starpc_e2e_mock_mock_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *MockMsg) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*MockMsg) ProtoMessage() {}

func (x *MockMsg) ProtoReflect() protoreflect.Message {
	mi := &file_github_com_aperturerobotics_starpc_e2e_mock_mock_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use MockMsg.ProtoReflect.Descriptor instead.
func (*MockMsg) Descriptor() ([]byte, []int) {
	return file_github_com_aperturerobotics_starpc_e2e_mock_mock_proto_rawDescGZIP(), []int{0}
}

func (x *MockMsg) GetBody() string {
	if x != nil {
		return x.Body
	}
	return ""
}

var File_github_com_aperturerobotics_starpc_e2e_mock_mock_proto protoreflect.FileDescriptor

var file_github_com_aperturerobotics_starpc_e2e_mock_mock_proto_rawDesc = []byte{
	0x0a, 0x36, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x61, 0x70, 0x65,
	0x72, 0x74, 0x75, 0x72, 0x65, 0x72, 0x6f, 0x62, 0x6f, 0x74, 0x69, 0x63, 0x73, 0x2f, 0x73, 0x74,
	0x61, 0x72, 0x70, 0x63, 0x2f, 0x65, 0x32, 0x65, 0x2f, 0x6d, 0x6f, 0x63, 0x6b, 0x2f, 0x6d, 0x6f,
	0x63, 0x6b, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x08, 0x65, 0x32, 0x65, 0x2e, 0x6d, 0x6f,
	0x63, 0x6b, 0x22, 0x1d, 0x0a, 0x07, 0x4d, 0x6f, 0x63, 0x6b, 0x4d, 0x73, 0x67, 0x12, 0x12, 0x0a,
	0x04, 0x62, 0x6f, 0x64, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x62, 0x6f, 0x64,
	0x79, 0x32, 0x3b, 0x0a, 0x04, 0x4d, 0x6f, 0x63, 0x6b, 0x12, 0x33, 0x0a, 0x0b, 0x4d, 0x6f, 0x63,
	0x6b, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x11, 0x2e, 0x65, 0x32, 0x65, 0x2e, 0x6d,
	0x6f, 0x63, 0x6b, 0x2e, 0x4d, 0x6f, 0x63, 0x6b, 0x4d, 0x73, 0x67, 0x1a, 0x11, 0x2e, 0x65, 0x32,
	0x65, 0x2e, 0x6d, 0x6f, 0x63, 0x6b, 0x2e, 0x4d, 0x6f, 0x63, 0x6b, 0x4d, 0x73, 0x67, 0x62, 0x06,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_github_com_aperturerobotics_starpc_e2e_mock_mock_proto_rawDescOnce sync.Once
	file_github_com_aperturerobotics_starpc_e2e_mock_mock_proto_rawDescData = file_github_com_aperturerobotics_starpc_e2e_mock_mock_proto_rawDesc
)

func file_github_com_aperturerobotics_starpc_e2e_mock_mock_proto_rawDescGZIP() []byte {
	file_github_com_aperturerobotics_starpc_e2e_mock_mock_proto_rawDescOnce.Do(func() {
		file_github_com_aperturerobotics_starpc_e2e_mock_mock_proto_rawDescData = protoimpl.X.CompressGZIP(file_github_com_aperturerobotics_starpc_e2e_mock_mock_proto_rawDescData)
	})
	return file_github_com_aperturerobotics_starpc_e2e_mock_mock_proto_rawDescData
}

var file_github_com_aperturerobotics_starpc_e2e_mock_mock_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_github_com_aperturerobotics_starpc_e2e_mock_mock_proto_goTypes = []interface{}{
	(*MockMsg)(nil), // 0: e2e.mock.MockMsg
}
var file_github_com_aperturerobotics_starpc_e2e_mock_mock_proto_depIdxs = []int32{
	0, // 0: e2e.mock.Mock.MockRequest:input_type -> e2e.mock.MockMsg
	0, // 1: e2e.mock.Mock.MockRequest:output_type -> e2e.mock.MockMsg
	1, // [1:2] is the sub-list for method output_type
	0, // [0:1] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_github_com_aperturerobotics_starpc_e2e_mock_mock_proto_init() }
func file_github_com_aperturerobotics_starpc_e2e_mock_mock_proto_init() {
	if File_github_com_aperturerobotics_starpc_e2e_mock_mock_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_github_com_aperturerobotics_starpc_e2e_mock_mock_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*MockMsg); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_github_com_aperturerobotics_starpc_e2e_mock_mock_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_github_com_aperturerobotics_starpc_e2e_mock_mock_proto_goTypes,
		DependencyIndexes: file_github_com_aperturerobotics_starpc_e2e_mock_mock_proto_depIdxs,
		MessageInfos:      file_github_com_aperturerobotics_starpc_e2e_mock_mock_proto_msgTypes,
	}.Build()
	File_github_com_aperturerobotics_starpc_e2e_mock_mock_proto = out.File
	file_github_com_aperturerobotics_starpc_e2e_mock_mock_proto_rawDesc = nil
	file_github_com_aperturerobotics_starpc_e2e_mock_mock_proto_goTypes = nil
	file_github_com_aperturerobotics_starpc_e2e_mock_mock_proto_depIdxs = nil
}
