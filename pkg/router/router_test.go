package router

import (
	"context"
	"testing"

	"github.com/ethereum/go-ethereum/common"
	"github.com/rollmelette/rollmelette"
	"github.com/stretchr/testify/suite"
)

var validJSONPayload = []byte(`{"path":"/advance-test","payload":"dGVzdA=="}`)
var inspectPayload = []byte("/inspect/123")
var msgSender = common.HexToAddress("0xfafafafafafafafafafafafafafafafafafafa")

type RouterSuite struct {
	suite.Suite
	router *Router
	tester *rollmelette.Tester
}

func (s *RouterSuite) SetupTest() {
	s.router = NewRouter()
	s.tester = rollmelette.NewTester(s.router)
}

func (s *RouterSuite) TestAdvance() {
	s.router.HandleAdvance("/advance-test", func(env rollmelette.Env, metadata rollmelette.Metadata, deposit rollmelette.Deposit, payload []byte) error {
		s.Equal([]byte("test"), payload)
		return nil
	})

	result := s.tester.Advance(msgSender, validJSONPayload)
	s.Nil(result.Err)
}

func (s *RouterSuite) TestInspect() {
	s.router.HandleInspect("/inspect/{id}", func(env rollmelette.EnvInspector, ctx context.Context) error {
		id := PathValue(ctx, "id")
		s.Equal("123", id)
		return nil
	})

	result := s.tester.Inspect(inspectPayload)
	s.Nil(result.Err)
}

func TestRouterSuite(t *testing.T) {
	suite.Run(t, new(RouterSuite))
}
