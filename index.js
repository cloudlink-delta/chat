// Name: CLΔ Chat
// ID: cldeltachat
// Description: Plugin for CLΔ Core to enable voice chat functionality.
// By: MikeDEV <https://scratch.mit.edu/users/MikeDEVTheDucklord/>
// License: MIT

/*
  CloudLink Delta Chat Plugin

  MIT License

  Copyright (C) 2025 CloudLink Delta.

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/

;(function (Scratch) {
  'use strict'
  const blockIcon =
    'data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%22312%22%20height%3D%22218%22%20viewBox%3D%220%200%20312%20218%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M155.88%200C194.829%200.000212318%20226.786%2030.1084%20229.987%2068.4414H237.391C278.466%2068.4414%20311.759%20101.922%20311.759%20143.221C311.759%20184.52%20278.466%20218%20237.391%20218H74.3682C33.2934%20218%200%20184.52%200%20143.221C0.000123011%20101.922%2033.2935%2068.4415%2074.3682%2068.4414H81.7715C84.9733%2030.1082%20116.931%200%20155.88%200ZM155.88%2010C122.221%2010%2094.5136%2036.0335%2091.7373%2069.2744L90.9717%2078.4414H74.3682C38.8684%2078.4415%2010.0001%20107.392%2010%20143.221C10%20179.049%2038.8683%20208%2074.3682%20208H237.391C272.891%20208%20301.759%20179.049%20301.759%20143.221C301.759%20107.392%20272.891%2078.4414%20237.391%2078.4414H220.788L220.023%2069.2744C217.246%2036.0337%20189.539%2010.0002%20155.88%2010Z%22%20fill%3D%22white%22%2F%3E%3Cpath%20d%3D%22M109.5%20180V172.5L149.85%2072.4502H162L202.2%20172.5V180H109.5ZM124.95%20167.85H186.6L161.55%20102.45C161.25%20101.65%20160.7%20100.2%20159.9%2098.1002C159.1%2096.0002%20158.3%2093.8502%20157.5%2091.6502C156.8%2089.3502%20156.25%2087.6002%20155.85%2086.4002C155.35%2088.4002%20154.75%2090.4502%20154.05%2092.5502C153.45%2094.5502%20152.8%2096.4002%20152.1%2098.1002C151.5%2099.8002%20151%20101.25%20150.6%20102.45L124.95%20167.85Z%22%20fill%3D%22white%22%2F%3E%3C%2Fsvg%3E'

  const menuIcon =
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzczIiBoZWlnaHQ9IjM3MyIgdmlld0JveD0iMCAwIDM3MyAzNzMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjE4Ni41IiBjeT0iMTg2LjUiIHI9IjE4Ni41IiBmaWxsPSIjMEY3RUJEIi8+CjxwYXRoIGQ9Ik0xODYuODggNjFDMjI1LjgyOSA2MS4wMDAyIDI1Ny43ODYgOTEuMTA4NCAyNjAuOTg3IDEyOS40NDFIMjY4LjM5MUMzMDkuNDY2IDEyOS40NDEgMzQyLjc1OSAxNjIuOTIyIDM0Mi43NTkgMjA0LjIyMUMzNDIuNzU5IDI0NS41MiAzMDkuNDY2IDI3OSAyNjguMzkxIDI3OUgxMDUuMzY4QzY0LjI5MzQgMjc5IDMxIDI0NS41MiAzMSAyMDQuMjIxQzMxLjAwMDEgMTYyLjkyMiA2NC4yOTM1IDEyOS40NDIgMTA1LjM2OCAxMjkuNDQxSDExMi43NzJDMTE1Ljk3MyA5MS4xMDgyIDE0Ny45MzEgNjEgMTg2Ljg4IDYxWk0xODYuODggNzFDMTUzLjIyMSA3MSAxMjUuNTE0IDk3LjAzMzUgMTIyLjczNyAxMzAuMjc0TDEyMS45NzIgMTM5LjQ0MUgxMDUuMzY4QzY5Ljg2ODQgMTM5LjQ0MiA0MS4wMDAxIDE2OC4zOTIgNDEgMjA0LjIyMUM0MSAyNDAuMDQ5IDY5Ljg2ODMgMjY5IDEwNS4zNjggMjY5SDI2OC4zOTFDMzAzLjg5MSAyNjkgMzMyLjc1OSAyNDAuMDQ5IDMzMi43NTkgMjA0LjIyMUMzMzIuNzU5IDE2OC4zOTIgMzAzLjg5MSAxMzkuNDQxIDI2OC4zOTEgMTM5LjQ0MUgyNTEuNzg4TDI1MS4wMjMgMTMwLjI3NEMyNDguMjQ2IDk3LjAzMzcgMjIwLjUzOSA3MS4wMDAyIDE4Ni44OCA3MVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xNDAuNSAyNDFWMjMzLjVMMTgwLjg1IDEzMy40NUgxOTNMMjMzLjIgMjMzLjVWMjQxSDE0MC41Wk0xNTUuOTUgMjI4Ljg1SDIxNy42TDE5Mi41NSAxNjMuNDVDMTkyLjI1IDE2Mi42NSAxOTEuNyAxNjEuMiAxOTAuOSAxNTkuMUMxOTAuMSAxNTcgMTg5LjMgMTU0Ljg1IDE4OC41IDE1Mi42NUMxODcuOCAxNTAuMzUgMTg3LjI1IDE0OC42IDE4Ni44NSAxNDcuNEMxODYuMzUgMTQ5LjQgMTg1Ljc1IDE1MS40NSAxODUuMDUgMTUzLjU1QzE4NC40NSAxNTUuNTUgMTgzLjggMTU3LjQgMTgzLjEgMTU5LjFDMTgyLjUgMTYwLjggMTgyIDE2Mi4yNSAxODEuNiAxNjMuNDVMMTU1Ljk1IDIyOC44NVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo='

  // Require the plugin to be unsandboxed
  if (!Scratch.extensions.unsandboxed) {
    alert(
      'The CloudLink Delta Chat plugin must be loaded in an unsandboxed environment.'
    )
    return
  }

  // Require access to the VM and/or runtime
  if (!Scratch.vm || !Scratch.vm.runtime) {
    alert(
      "The CloudLink Delta Chat plugin could not detect access to the Scratch VM and/or runtime; this plugin won't work."
    )
    return
  }

  // Require browser to support Web Locks API (used for concurrency)
  if (!navigator.locks) {
    alert(
      "The CloudLink Delta Chat plugin could not detect Web Locks support; this plugin won't work."
    )
    return
  }

  // Initialize the plugin loader
  if (!Scratch.vm.runtime.ext_cldelta_pluginloader) {
    Scratch.vm.runtime.ext_cldelta_pluginloader = new Array()
  }

  /*
    Block utilities for creating blocks with less code.
    Based on Rotur.js by Mistium
    https://extensions.mistium.com/featured/Rotur.js

    MPL-2.0
    This Source Code is subject to the terms of the Mozilla Public License, v2.0,
    If a copy of the MPL was not distributed with this file,
    Then you can obtain one at https://mozilla.org/MPL/2.0/
  */
  // Defines a set of block types
  const opcodes = {
    conditional: (opcode, text, options = {}) => ({
      opcode,
      text: text.map(v => Scratch.translate(v)),
      blockType: Scratch.BlockType.CONDITIONAL,
      branchCount: text.length - 1,
      ...options
    }),

    reporter: (opcode, text, args = {}, options = {}) => ({
      opcode,
      blockType: Scratch.BlockType.REPORTER,
      text: Scratch.translate(text),
      arguments: args,
      ...options
    }),

    command: (opcode, text, args = {}, options = {}) => ({
      opcode,
      blockType: Scratch.BlockType.COMMAND,
      text: Scratch.translate(text),
      arguments: args,
      ...options
    }),

    boolean: (opcode, text, args = {}, options = {}) => ({
      opcode,
      blockType: Scratch.BlockType.BOOLEAN,
      text: Scratch.translate(text),
      arguments: args,
      ...options
    }),

    event: (opcode, text, options = {}) => ({
      opcode,
      blockType: Scratch.BlockType.EVENT,
      text: Scratch.translate(text),
      isEdgeActivated: false,
      ...options
    }),

    button: (text, func, options = {}) => ({
      blockType: Scratch.BlockType.BUTTON,
      text: Scratch.translate(text),
      func,
      ...options
    }),

    label: text => ({
      blockType: Scratch.BlockType.LABEL,
      text: Scratch.translate(text)
    }),

    separator: () => '---'
  }

  const args = {
    string: (value, options = {}) => ({
      type: Scratch.ArgumentType.STRING,
      defaultValue: value,
      ...options
    }),

    number: (value, options = {}) => ({
      type: Scratch.ArgumentType.NUMBER,
      defaultValue: value,
      ...options
    }),

    boolean: (value, options = {}) => ({
      type: Scratch.ArgumentType.BOOLEAN,
      defaultValue: value,
      ...options
    })
  }

  class CloudLinkDelta_Chat {
    constructor () {
      this.core
      this.ringingPeers = new Map()
      this.voiceConnections = new Map()
      this.hasMicPerms = false
      this.myVoiceStream
      this.audioContext
      this.newestIncomingCallIDValue = ''
      this.pendingOutgoingCalls = new Map()
      this.incomingListTarget = null
      this.outgoingListTarget = null
      this.activeListTarget = null
    }

    /**
     * Called when the plugin is registered with the core extension.
     *
     * @param {Object} core - The core object of the CLΔ framework.
     */
    register (core) {

      this.core = core
      this.core.registerPlugin(this)
      this.core.callbacks.bind('peer_call', this._handleIncomingMediaCall.bind(this))

      if (!core.plugins.includes('chat')) {
        core.plugins.push('chat')
        console.log('CLΔ Chat plugin registered.')
      }
    }

    getOpcodes () {
      const handlers = new Map()
      handlers.set('CALL', this._handleCallSignal)
      handlers.set('ANSWER', this._handleAnswerSignal)
      handlers.set('DECLINE', this._handleDeclineSignal)
      handlers.set('HANGUP', this._handleHangupSignal)
      return handlers
    }

    getInfo () {
      return {
        id: 'cldeltachat',
        name: 'CLΔ Chat',
        menuIconURI: menuIcon,
        blockIconURI: blockIcon,
        color1: '#0F7EBD',
        blocks: [
          // Control
          opcodes.label('Control'),
          opcodes.command('doPeer', '[REQUEST] peer [ID]', {
            REQUEST: args.string('call', { menu: 'request' }),
            ID: args.string('B')
          }),
          opcodes.command('bindListOutput', 'output [MODE] to list [LIST]', {
            MODE: args.string('incoming calls', { menu: 'callMode' }),
            LIST: args.string('my list', {
              acceptsReporters: true,
              variableType: 'list'
            })
          }),
          opcodes.separator(),

          // Ringer
          opcodes.label('Ringer'),
          opcodes.event('whenPeerRings', 'when peer [ID] calls me', {
            arguments: {
              ID: args.string('B')
            }
          }),
          opcodes.event('onPeerRing', 'when I get an incoming call'),
          opcodes.reporter(
            'newestIncomingCallID',
            'newest incoming call peer'
          ),
          opcodes.separator(),

          // Mic controls
          opcodes.label('Microphone'),
          opcodes.boolean('doIHaveMicPerms', 'microphone available?'),
          opcodes.boolean('isMicMuted', 'is microphone muted?'),
          opcodes.command('requestMicPerms', 'request microphone access'),
          opcodes.command('setMicMuted', 'set microphone muted to [MUTED]', { MUTED: args.boolean(true) }),
          opcodes.separator(),

          // Audio Properties
          opcodes.label('Audio Properties'),
          opcodes.reporter('getVoiceProperty', 'player [ID] voice [PROP]', { ID: args.string('B'), PROP: args.string('volume', { menu: 'voiceProperty' }) }),
          opcodes.command('setVoiceProperty', 'set player [ID] voice [PROP] to [VALUE]', { ID: args.string('B'), PROP: args.string('volume', { menu: 'voiceProperty' }), VALUE: args.number(100) }),
          opcodes.command('changeVoiceProperty', 'change player [ID] voice [PROP] by [STEPS]', { ID: args.string('B'), PROP: args.string('volume', { menu: 'voiceProperty' }), STEPS: args.number(10) })
        ],
        menus: {
          request: {
            items: [
              Scratch.translate('call'),
              Scratch.translate('answer'),
              Scratch.translate('decline'),
              Scratch.translate('hangup')
            ]
          },
          callMode: {
            items: [
              Scratch.translate('incoming calls'),
              Scratch.translate('outgoing calls'),
              Scratch.translate('active calls')
            ]
          },
          voiceProperty: {
            items: ['volume', 'x', 'y', 'z']
          }
        }
      }
    }

    whenPeerRings ({ ID }) {
      if (!this.core) return false
      return this.core.isOtherPeerConnected({ ID: Scratch.Cast.toString(ID) })
    }

    doIHaveMicPerms () {
      return this.hasMicPerms
    }

    async requestMicPerms () {
      if (!this.core) return
      if (this.hasMicPerms || this.myVoiceStream) return
      if (await Scratch.canRecordAudio()) {
        await navigator.mediaDevices
          .getUserMedia({ audio: true })
          .then(stream => {
            this.myVoiceStream = stream
            this.hasMicPerms = true
          })
          .catch(e => {
            console.warn(`Failed to get microphone permission. ${e}`)
            this.hasMicPerms = false
          })
      }
    }

    setMicMuted ({ MUTED }) {
      if (!this.myVoiceStream) return
      const muted = Scratch.Cast.toBoolean(MUTED)
      this.myVoiceStream.getAudioTracks().forEach(track => {
        track.enabled = !muted
      })
    }

    isMicMuted () {
      if (!this.myVoiceStream) return false
      const tracks = this.myVoiceStream.getAudioTracks()
      if (tracks.length === 0) return false
      return !tracks[0].enabled
    }

    async doPeer ({ REQUEST, ID }) {
      if (!this.core) return
      const peerId = this.core.resolvePeerId(Scratch.Cast.toString(ID))
      const requestType = Scratch.Cast.toString(REQUEST)

      switch (requestType) {
        case 'call': {
          console.log('[CLΔ Chat] Calling peer ' + this.core._prettyPeer(peerId))
          if (!this.core.isOtherPeerConnected({ ID: peerId })) {
            console.warn(`[CLΔ Chat] Cannot call peer ${this.core._prettyPeer(peerId)}: not connected.`)
            return
          }
          if (!this.hasMicPerms) {
            await this.requestMicPerms()
            if (!this.hasMicPerms) return
          }
          await navigator.locks.request('cldeltachat_state', async () => {
            if (
              this.voiceConnections.has(peerId) ||
              this.pendingOutgoingCalls.has(peerId)
            ) {
              console.warn(`[CLΔ Chat] Already in a call or calling peer ${this.core._prettyPeer(peerId)}.`)
              return
            }
            this.pendingOutgoingCalls.set(peerId, true)
            this.core._sendMessageToPeer('', peerId, 'default', 'CALL')
            this._updateLists()
          })
          break
        }
        case 'answer': {
          console.log('[CLΔ Chat] Answering peer ' + this.core._prettyPeer(peerId))
          if (!this.hasMicPerms) {
            await this.requestMicPerms()
            if (!this.hasMicPerms) return
          }
          await navigator.locks.request('cldeltachat_state', async () => {
            if (!this.ringingPeers.has(peerId)) {
              console.warn(`[CLΔ Chat] No incoming call from ${this.core._prettyPeer(peerId)} to answer.`)
              return
            }
            this.ringingPeers.delete(peerId)
            this.core._sendMessageToPeer('', peerId, 'default', 'ANSWER')
            this._updateLists()
          })
          break
        }
        case 'decline': {
          console.log('[CLΔ Chat] Declining peer ' + this.core._prettyPeer(peerId))
          await navigator.locks.request('cldeltachat_state', async () => {
            if (!this.ringingPeers.has(peerId)) return
            this.ringingPeers.delete(peerId)
            if (this.newestIncomingCallIDValue === this.core._prettyPeer(peerId)) {
              this.newestIncomingCallIDValue = ''
            }
            this.core._sendMessageToPeer('', peerId, 'default', 'DECLINE')
            this._updateLists()
          })
          break
        }
        case 'hangup': {
          console.log('[CLΔ Chat] Hanging up peer ' + this.core._prettyPeer(peerId))
          this.core._sendMessageToPeer('', peerId, 'default', 'HANGUP')
          await this._hangupPeerCall(peerId) // Hang up locally as well
          break
        }
      }
    }

    async _hangupPeerCall (ID) {
      if (!this.core) return
      const peerId = Scratch.Cast.toString(ID)
      await navigator.locks.request('cldeltachat_state', async () => {
        if (this.voiceConnections.has(peerId)) {
          const connData = this.voiceConnections.get(peerId);
          if (connData.source) connData.source.disconnect();
          if (connData.panner) connData.panner.disconnect();
          if (connData.gain) connData.gain.disconnect();
          connData.call.close()
          this.voiceConnections.delete(peerId);
        }
        // Also clean up pending/ringing states
        if (this.ringingPeers.has(peerId)) {
          this.ringingPeers.delete(peerId)
        }
        if (this.pendingOutgoingCalls.has(peerId)) {
          this.pendingOutgoingCalls.delete(peerId)
        }
        if (this.newestIncomingCallIDValue === this.core._prettyPeer(peerId)) {
          this.newestIncomingCallIDValue = ''
        }
        this._updateLists()
      })
    }

    async _handleCallSignal (packet, fromPeerId) {
      if (!this.core) return
      await navigator.locks.request('cldeltachat_state', async () => {
        // Ignore if already in a call or ringing from this peer
        if (
          this.voiceConnections.has(fromPeerId) ||
          this.ringingPeers.has(fromPeerId)
        ) {
          return
        }
        // Try to use a pretty value, otherwise use the default ID
        this.newestIncomingCallIDValue = this.core._prettyPeer(fromPeerId)
        this.ringingPeers.set(fromPeerId, true) // Store that a call is incoming
        this._updateLists()
        console.log(`[CLΔ Chat] Incoming call from ${this.core._prettyPeer(fromPeerId)}...`)
        Scratch.vm.runtime.startHats('cldeltachat_whenPeerRings', { ID: fromPeerId })
        Scratch.vm.runtime.startHats('cldeltachat_whenPeerRings')
        Scratch.vm.runtime.startHats('cldeltachat_onPeerRing')
      })
    }

    async _handleAnswerSignal (_, fromPeerId) {
      if (!this.core) return

      let shouldAnswer = false
      await navigator.locks.request('cldeltachat_state', async () => {
        if (this.pendingOutgoingCalls.has(fromPeerId)) {
          this.pendingOutgoingCalls.delete(fromPeerId)
          this._updateLists()
          shouldAnswer = true
        }
      })

      if (!shouldAnswer) return

      console.log(`[CLΔ Chat] Answering call to ${this.core._prettyPeer(fromPeerId)}...`)

      // Now that it's answered, initiate the actual PeerJS media call
      const lock_id = 'cldeltachat_' + fromPeerId + '_call'
      await navigator.locks.request(lock_id, { ifAvailable: true }, async () => {
        const call = await this.core.peer.call(fromPeerId, this.myVoiceStream, {
          metadata: {
            name: this.core.name,
            protocol: 'delta' // REQUIRED
          }
        })
        this._handleCall(fromPeerId, call)
      })
    }

    async _handleDeclineSignal (_, fromPeerId) {
      await navigator.locks.request('cldeltachat_state', async () => {
        if (this.pendingOutgoingCalls.has(fromPeerId)) {
          console.log(`[CLΔ Chat] Call with ${this.core._prettyPeer(fromPeerId)} was declined.`)
          this.pendingOutgoingCalls.delete(fromPeerId)
          if (this.newestIncomingCallIDValue === this.core._prettyPeer(fromPeerId)) {
            this.newestIncomingCallIDValue = ''
          }
          this._updateLists()
        }
      })
    }

    async _handleHangupSignal (_, fromPeerId) {
      console.log(`[CLΔ Chat] Call with ${this.core._prettyPeer(fromPeerId)} hanging up...`)
      await this._hangupPeerCall(fromPeerId)
    }

    _handleIncomingMediaCall (call) {
      if (!this.hasMicPerms) {
        console.warn(
          '[CLΔ Chat] Received a media call but have no mic permissions. Closing.'
        )
        call.close()
        return
      }
      // Automatically answer, since the user already approved via the 'ANSWER' signal
      call.answer(this.myVoiceStream)
      this._handleCall(call.peer, call)
    }

    _handleCall (id, call) {
      if (!this.core) return
      call.on('stream', async remoteStream => {
        await navigator.locks.request('cldeltachat_state', async () => {
          // Clean up any lingering ringing/pending states
          if (this.ringingPeers.has(id)) this.ringingPeers.delete(id)
          if (this.pendingOutgoingCalls.has(id)) this.pendingOutgoingCalls.delete(id)
  
          // Initialize Audio Context on demand
          if (!this.audioContext) {
              this.audioContext = Scratch.vm.runtime.audioEngine.audioContext;
              if (!this.audioContext) {
                  console.error("[CLΔ Chat] Audio context not found or not yet initialized!");
                  return;
              }
          }
  
          const source = this.audioContext.createMediaStreamSource(remoteStream);
          
          const panner = this.audioContext.createPanner();
          panner.panningModel = "HRTF";
          panner.distanceModel = "inverse";
          panner.refDistance = 1;
          panner.maxDistance = 10000;
          panner.rolloffFactor = 1;
          panner.coneInnerAngle = 360;
          panner.coneOuterAngle = 0;
          panner.coneOuterGain = 0;
          panner.positionX.value = 0;
          panner.positionY.value = 0;
          panner.positionZ.value = 0;
  
          const gain = this.audioContext.createGain();
          gain.gain.value = 1; // Default to 100% volume
  
          source.connect(panner);
          panner.connect(gain);
          gain.connect(this.audioContext.destination);
  
          this.voiceConnections.set(id, {
            call: call,
            source: source,
            panner: panner,
            gain: gain,
            stream: remoteStream
          })
  
          this._updateLists()
  
          if (this.audioContext.state === "suspended") {
              this.audioContext.resume();
          }
  
          console.log(
            '[CLΔ Chat] Call with peer ' + this.core._prettyPeer(id) + ' started (3D Audio Routing).'
          )
        })
      })

      call.on('close', () => {
        this._hangupPeerCall(id)
        console.log(
            '[CLΔ Chat] Call with peer ' + this.core._prettyPeer(id) + ' ended.'
        )
      })

      call.on('error', err => {
        console.warn('[CLΔ Chat] Call with peer ' + this.core._prettyPeer(id) + ' error: ' + err)
        this._hangupPeerCall(id) // Use the main cleanup function
      })
    }

    async bindListOutput({ MODE, LIST }, util) {
      const listName = Scratch.Cast.toString(LIST)
      const list = util.target.lookupVariableByNameAndType(listName, 'list')
      if (!list) {
        console.warn(`[CLΔ Chat] Could not find list named: ${listName}`)
        return
      }
      
      const mode = Scratch.Cast.toString(MODE)
      await navigator.locks.request('cldeltachat_state', async () => {
        if (mode === 'incoming calls') {
          this.incomingListTarget = list
        } else if (mode === 'outgoing calls') {
          this.outgoingListTarget = list
        } else if (mode === 'active calls') {
          this.activeListTarget = list
        }
        
        this._updateLists()
      })
    }

    _updateLists () {
      if (!this.core) return
      if (this.incomingListTarget) {
        this.incomingListTarget.value = Array.from(this.ringingPeers.keys()).map(id => this.core._prettyPeer(id))
        this.incomingListTarget._monitorUpToDate = false
      }
      if (this.outgoingListTarget) {
        this.outgoingListTarget.value = Array.from(this.pendingOutgoingCalls.keys()).map(id => this.core._prettyPeer(id))
        this.outgoingListTarget._monitorUpToDate = false
      }
      if (this.activeListTarget) {
        this.activeListTarget.value = Array.from(this.voiceConnections.keys()).map(id => this.core._prettyPeer(id))
        this.activeListTarget._monitorUpToDate = false
      }
    }

    newestIncomingCallID () {
      return this.newestIncomingCallIDValue
    }

    async getVoiceProperty({ ID, PROP }) {
        let value = 0;
        await navigator.locks.request('cldeltachat_state', async () => {
            if (!this.core) return;
            const peerId = this.core.resolvePeerId(Scratch.Cast.toString(ID));
            if (!this.voiceConnections.has(peerId)) return;
            const prop = Scratch.Cast.toString(PROP).toLowerCase();
            const conn = this.voiceConnections.get(peerId);
            if (prop === 'volume') value = (conn.gain.gain.value * 100).toFixed(2);
            else if (prop === 'x') value = conn.panner.positionX.value;
            else if (prop === 'y') value = conn.panner.positionY.value;
            else if (prop === 'z') value = conn.panner.positionZ.value;
        });
        return value;
    }

    async setVoiceProperty({ ID, PROP, VALUE }) {
        await navigator.locks.request('cldeltachat_state', async () => {
            if (!this.core) return;
            const peerId = this.core.resolvePeerId(Scratch.Cast.toString(ID));
            if (!this.voiceConnections.has(peerId)) return;
            const prop = Scratch.Cast.toString(PROP).toLowerCase();
            const conn = this.voiceConnections.get(peerId);
            const val = Scratch.Cast.toNumber(VALUE);
            if (prop === 'volume') conn.gain.gain.value = Math.max(0, val / 100);
            else if (prop === 'x') conn.panner.positionX.value = val;
            else if (prop === 'y') conn.panner.positionY.value = val;
            else if (prop === 'z') conn.panner.positionZ.value = val;
        });
    }

    async changeVoiceProperty({ ID, PROP, STEPS }) {
        await navigator.locks.request('cldeltachat_state', async () => {
            if (!this.core) return;
            const peerId = this.core.resolvePeerId(Scratch.Cast.toString(ID));
            if (!this.voiceConnections.has(peerId)) return;
            const prop = Scratch.Cast.toString(PROP).toLowerCase();
            const conn = this.voiceConnections.get(peerId);
            const steps = Scratch.Cast.toNumber(STEPS);
            if (prop === 'volume') conn.gain.gain.value = Math.max(0, conn.gain.gain.value + (steps / 100));
            else if (prop === 'x') conn.panner.positionX.value += steps;
            else if (prop === 'y') conn.panner.positionY.value += steps;
            else if (prop === 'z') conn.panner.positionZ.value += steps;
        });
    }
  }

  // Register the plugin
  const chat = new CloudLinkDelta_Chat()
  Scratch.extensions.register(chat)
  Scratch.vm.runtime.ext_cldelta_chat = chat
  console.log('CLΔ Chat plugin loaded.')

  // Either immediately register, or defer
  const core = Scratch.vm.runtime.ext_cldelta_core
  if (core) {
    chat.register(core)
  } else {
    Scratch.vm.runtime.ext_cldelta_pluginloader.push(chat)
  }
})(Scratch)