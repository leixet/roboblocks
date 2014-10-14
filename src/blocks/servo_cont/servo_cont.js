'use strict';
/* global Blockly, options,JST, RoboBlocks */
/* jshint sub:true */

/**
 * servo_cont code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.servo_cont = function() {
    var dropdown_pin = this.getFieldValue('PIN');
    var value_degree = this.getFieldValue('ROT');
    var delay_time = Blockly.Arduino.valueToCode(this, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC);

    delay_time = delay_time.replace('(', '').replace(')', '');

    Blockly.Arduino.definitions_['define_servo'] = JST['servo_cont_definitions']({
        'dropdown_pin': dropdown_pin
    });


    Blockly.Arduino.setups_['setup_servo_' + dropdown_pin] =JST['servo_cont_setups']({
        'dropdown_pin': dropdown_pin
    });


    var code = JST['servo_cont']({
        'dropdown_pin': dropdown_pin,
        'value_degree': value_degree,
        'delay_time': delay_time
    });
    return code;
};

/**
 * servo_cont block definition
 * @type {Object}
 */
Blockly.Blocks.servo_cont = {
    category: RoboBlocks.LANG_CATEGORY_SERVO,
    tags: ['servo continuous'],
    helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/servo_cont',
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_SERVO);
        this.appendValueInput('PIN')
            .appendField(RoboBlocks.LANG_SERVO_CONT)
            .appendField(new Blockly.FieldImage('img/blocks/bqservo03.png', 208 * options.zoom, 126 * options.zoom))
            .appendField(RoboBlocks.LANG_SERVO_CONT_PIN);
        this.appendDummyInput()
            .appendField(RoboBlocks.LANG_SERVO_CONT_ROT)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(new Blockly.FieldDropdown([
                [RoboBlocks.LANG_SERVO_CONT_TURN_CLOCKWISE, '0'],
                [RoboBlocks.LANG_SERVO_CONT_TURN_COUNTERCLOCKWISE, '180'],
                [RoboBlocks.LANG_SERVO_CONT_STOPPED, '90']
            ]), 'ROT');
        this.appendValueInput('DELAY_TIME', Number)
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(RoboBlocks.LANG_SERVO_CONT_DELAY);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(RoboBlocks.LANG_SERVO_CONT_TOOLTIP);
    }
};
