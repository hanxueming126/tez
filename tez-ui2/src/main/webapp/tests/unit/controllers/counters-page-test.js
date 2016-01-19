/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Ember from 'ember';

import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:counters-page', 'Unit | Controller | counters page', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('Basic creation test', function(assert) {
  let controller = this.subject({
    send: Ember.K
  });

  assert.ok(controller);
  assert.ok(controller.columns);
  assert.ok(controller.counters);
});

test('counters test', function(assert) {
  let controller = this.subject({
    send: Ember.K,
    model: {
      counterGroups: [{
        counterGroupName: "a.b.foo",
        counters: [{
          counterName: "Foo Name 1",
          counterValue: "Value 1"
        },{
          counterName: "Foo Name 2",
          counterValue: "Value 2"
        },{
          counterName: "Foo Name 3",
          counterValue: "Value 3"
        },]
      },{
        counterGroupName: "a.b.bar",
        counters: [{
          counterName: "Bar Name 1",
          counterValue: "Value 1"
        },{
          counterName: "Bar Name 2",
          counterValue: "Value 2"
        },{
          counterName: "Bar Name 3",
          counterValue: "Value 3"
        },]
      }]
    }
  });

  assert.equal(controller.get("counters.0.groupName"), "foo");
  assert.equal(controller.get("counters.0.counterName"), "Foo Name 1");
  assert.equal(controller.get("counters.0.counterValue"), "Value 1");

  assert.equal(controller.get("counters.1.groupName"), "foo");
  assert.equal(controller.get("counters.1.counterName"), "Foo Name 2");
  assert.equal(controller.get("counters.1.counterValue"), "Value 2");

  assert.equal(controller.get("counters.2.groupName"), "foo");
  assert.equal(controller.get("counters.2.counterName"), "Foo Name 3");
  assert.equal(controller.get("counters.2.counterValue"), "Value 3");


  assert.equal(controller.get("counters.3.groupName"), "bar");
  assert.equal(controller.get("counters.3.counterName"), "Bar Name 1");
  assert.equal(controller.get("counters.3.counterValue"), "Value 1");

  assert.equal(controller.get("counters.4.groupName"), "bar");
  assert.equal(controller.get("counters.4.counterName"), "Bar Name 2");
  assert.equal(controller.get("counters.4.counterValue"), "Value 2");

  assert.equal(controller.get("counters.5.groupName"), "bar");
  assert.equal(controller.get("counters.5.counterName"), "Bar Name 3");
  assert.equal(controller.get("counters.5.counterValue"), "Value 3");
});

