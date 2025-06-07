<template>
	<view class="content">
		<form class="app-update-pv">
			 
			<view :style='{"boxShadow":"0 0 0px rgba(0,0,0,.3)","padding":"0","backgroundColor":"rgba(1, 157, 214, 0.1)","borderColor":"rgba(245, 245, 245, 1)","margin":"0","borderRadius":"0","borderWidth":"0 0 4rpx","width":"100%","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"#ccc","backgroundColor":"rgba(0,0,0,0)","color":"rgba(51, 51, 51, 1)","textAlign":"center","borderRadius":"0","borderWidth":"0","width":"160rpx","fontSize":"28rpx","lineHeight":"80rpx","borderStyle":"solid"}' class="title">用户账号</view>
				<input :style='{"boxShadow":"0 0 0px rgba(0,0,0,.6) inset","padding":"0 30rpx","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(0,0,0,.6)","margin":"0","color":"rgba(51, 51, 51, 1)","textAlign":"left","borderRadius":"0 20rpx","borderWidth":"2rpx","width":"calc(100% - 160rpx)","fontSize":"26rpx","borderStyle":"solid","height":"80rpx"}' :disabled="ro.yonghuzhanghao" v-model="ruleForm.yonghuzhanghao" placeholder="用户账号"></input>
			</view>
			<view :style='{"boxShadow":"0 0 0px rgba(0,0,0,.3)","padding":"0","backgroundColor":"rgba(1, 157, 214, 0.1)","borderColor":"rgba(245, 245, 245, 1)","margin":"0","borderRadius":"0","borderWidth":"0 0 4rpx","width":"100%","borderStyle":"solid","height":"108rpx"}' class="cu-form-group select">
				<view :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"#ccc","backgroundColor":"rgba(0,0,0,0)","color":"rgba(51, 51, 51, 1)","textAlign":"center","borderRadius":"0","borderWidth":"0","width":"160rpx","fontSize":"28rpx","lineHeight":"80rpx","borderStyle":"solid"}' class="title">用户姓名</view>
				<picker @change="yonghuxingmingChange" :value="yonghuxingmingIndex"  :range="yonghuxingmingOptions">
					<view :style='{"boxShadow":"0 0 0px rgba(0,0,0,.6) inset","padding":"0 30rpx","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(0,0,0,.6)","margin":"0","color":"rgba(51, 51, 51, 1)","textAlign":"left","borderRadius":"0 20rpx","borderWidth":"2rpx","width":"calc(100% - 160rpx)","fontSize":"26rpx","lineHeight":"80rpx","borderStyle":"solid","height":"80rpx"}' class="uni-input">{{yonghuxingmingOptions[yonghuxingmingIndex]}}</view>
				</picker>
			</view>
			<view :style='{"boxShadow":"0 0 0px rgba(0,0,0,.3)","padding":"0","backgroundColor":"rgba(1, 157, 214, 0.1)","borderColor":"rgba(245, 245, 245, 1)","margin":"0","borderRadius":"0","borderWidth":"0 0 4rpx","width":"100%","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"#ccc","backgroundColor":"rgba(0,0,0,0)","color":"rgba(51, 51, 51, 1)","textAlign":"center","borderRadius":"0","borderWidth":"0","width":"160rpx","fontSize":"28rpx","lineHeight":"80rpx","borderStyle":"solid"}' class="title">提交时间</view>
				<input :style='{"boxShadow":"0 0 0px rgba(0,0,0,.6) inset","padding":"0 30rpx","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(0,0,0,.6)","margin":"0","color":"rgba(51, 51, 51, 1)","textAlign":"left","borderRadius":"0 20rpx","borderWidth":"2rpx","width":"calc(100% - 160rpx)","fontSize":"26rpx","borderStyle":"solid","height":"80rpx"}' v-model="ruleForm.tijiaoshijian" placeholder="提交时间" @tap="toggleTab('tijiaoshijian')"></input>
			</view>
			<view :style='{"boxShadow":"0 0 0px rgba(0,0,0,.3)","padding":"0","backgroundColor":"rgba(1, 157, 214, 0.1)","borderColor":"rgba(245, 245, 245, 1)","margin":"0","borderRadius":"0","borderWidth":"0 0 4rpx","width":"100%","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"#ccc","backgroundColor":"rgba(0,0,0,0)","color":"rgba(51, 51, 51, 1)","textAlign":"center","borderRadius":"0","borderWidth":"0","width":"160rpx","fontSize":"28rpx","lineHeight":"80rpx","borderStyle":"solid"}' class="title">发布人</view>
				<input :style='{"boxShadow":"0 0 0px rgba(0,0,0,.6) inset","padding":"0 30rpx","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(0,0,0,.6)","margin":"0","color":"rgba(51, 51, 51, 1)","textAlign":"left","borderRadius":"0 20rpx","borderWidth":"2rpx","width":"calc(100% - 160rpx)","fontSize":"26rpx","borderStyle":"solid","height":"80rpx"}' :disabled="ro.faburen" v-model="ruleForm.faburen" placeholder="发布人"></input>
			</view>
			
			<!-- 否 -->
 

			<view :style='{"boxShadow":"0 0 0px rgba(0,0,0,.3)","padding":"0","backgroundColor":"rgba(1, 157, 214, 0.1)","borderColor":"rgba(245, 245, 245, 1)","margin":"0 0 0 0","borderRadius":"0","borderWidth":"4rpx","width":"100%","borderStyle":"solid","height":"308rpx"}' class="cu-form-group">
				<view :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"#ccc","backgroundColor":"rgba(0,0,0,0)","color":"rgba(51, 51, 51, 1)","textAlign":"center","borderRadius":"0","borderWidth":"0","width":"160rpx","fontSize":"28rpx","lineHeight":"80rpx","borderStyle":"solid"}' class="title">内容</view>
				<textarea :style='{"boxShadow":"0 0 0px rgba(0,0,0,.6) inset","padding":"20rpx","backgroundColor":"rgba(255, 255, 255, 0.1)","borderColor":"rgba(0,0,0,.6)","margin":"0","color":"rgba(51, 51, 51, 1)","textAlign":"left","borderRadius":"0 20rpx","borderWidth":"2rpx","width":"calc(100% - 160rpx)","fontSize":"26rpx","borderStyle":"solid","height":"100%"}' v-model="ruleForm.neirong" placeholder="内容"></textarea>
			</view>
			
			
			<view class="btn" >
				<button :style='{"boxShadow":"0 0 0px rgba(0,0,0,0) inset","padding":"0","backgroundColor":"rgba(1, 157, 214, 1)","borderColor":"#409EFF","margin":"0","borderRadius":"0 0 20rpx 20rpx","color":"#fff","borderWidth":"0","width":"90%","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}' @tap="onSubmitTap" class="bg-red">提交</button>
			</view>
		</form>

		<w-picker mode="dateTime" step="1" :current="false" :hasSecond="false" @confirm="tijiaoshijianConfirm" ref="tijiaoshijian" themeColor="#333333"></w-picker>
			
	</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";

	export default {
		data() {
			return {
				cross:'',
				ruleForm: {
				yonghuzhanghao: '',
				yonghuxingming: '',
				tijiaoshijian: '',
				neirong: '',
				faburen: '',
				userid: '',
				},
				yonghuxingmingOptions: [],
				yonghuxingmingIndex: 0,
				// 登陆用户信息
				user: {},
                                ro:{
                                   yonghuzhanghao : false,
                                   yonghuxingming : false,
                                   tijiaoshijian : false,
                                   neirong : false,
                                   faburen : false,
                                   userid : false,
                                },
			}
		},
		components: {
			wPicker
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			},



		},
		async onLoad(options) {
        		this.ruleForm.tijiaoshijian = this.$utils.getCurDateTime();

			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
			
			// ss读取


			// 下2
			res = await this.$api.option(`yonghu`,`yonghuxingming`,{});
			this.yonghuxingmingOptions = res.data;

			// 如果有登陆，获取登陆后保存的userid
			this.ruleForm.userid = uni.getStorageSync("userid")
			if (options.refid) {
				// 如果上一级页面传递了refid，获取改refid数据信息
				this.ruleForm.refid = options.refid;
				this.ruleForm.nickname = uni.getStorageSync("nickname");
			}
			// 如果是更新操作
			if (options.id) {
				this.ruleForm.id = options.id;
				// 获取信息
				res = await this.$api.info(`humianxinxi`, this.ruleForm.id);
				this.ruleForm = res.data;
			}
			// 跨表
			this.cross = options.cross;
			if(options.cross){
				var obj = uni.getStorageSync('crossObj');
				for (var o in obj){
					if(o=='yonghuzhanghao'){
					this.ruleForm.yonghuzhanghao = obj[o];
					this.ro.yonghuzhanghao = true;
					continue;
					}
					if(o=='yonghuxingming'){
					this.ruleForm.yonghuxingming = obj[o];
					this.ro.yonghuxingming = true;
					continue;
					}
					if(o=='tijiaoshijian'){
					this.ruleForm.tijiaoshijian = obj[o];
					this.ro.tijiaoshijian = true;
					continue;
					}
					if(o=='neirong'){
					this.ruleForm.neirong = obj[o];
					this.ro.neirong = true;
					continue;
					}
					if(o=='faburen'){
					this.ruleForm.faburen = obj[o];
					this.ro.faburen = true;
					continue;
					}
					if(o=='userid'){
					this.ruleForm.userid = obj[o];
					this.ro.userid = true;
					continue;
					}
				}
			}
			this.styleChange()
		},
		methods: {
			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.app-update-pv .cu-form-group .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.addUpdateForm.input.content.backgroundColor
					// })
				})
			},
			// 下二随
			async yonghuxingmingChange (e) {
				this.yonghuxingmingIndex = e.target.value
				this.ruleForm.yonghuxingming = this.yonghuxingmingOptions[this.yonghuxingmingIndex]
				let res = await this.$api.follow(`yonghu`, `yonghuxingming`,{
					columnValue: this.ruleForm.yonghuxingming
				});
				if(res.data.yonghuzhanghao){
					this.ruleForm.yonghuzhanghao = res.data.yonghuzhanghao
				}
			},

			// 多级联动参数


			// 日长控件选择日期时间
			tijiaoshijianConfirm(val) {
				console.log(val)
				this.ruleForm.tijiaoshijian = val.result;
				this.$forceUpdate();
			},



			getUUID () {
				return new Date().getTime();
			},
			async onSubmitTap() {













//跨表计算判断
				if((!this.ruleForm.yonghuxingming)){
					this.$utils.msg(`用户姓名不能为空`);
					return
				}
				if((!this.ruleForm.neirong)){
					this.$utils.msg(`内容不能为空`);
					return
				}
				if((!this.ruleForm.faburen)){
					this.$utils.msg(`发布人不能为空`);
					return
				}
				//更新跨表属性
			       var crossuserid;
			       var crossrefid;
			       var crossoptnum;
				if(this.cross){
					var statusColumnName = uni.getStorageSync('statusColumnName');
					var statusColumnValue = uni.getStorageSync('statusColumnValue');
					if(statusColumnName!='') {
						var obj = uni.getStorageSync('crossObj');
						if(!statusColumnName.startsWith("[")) {
							for (var o in obj){
								if(o==statusColumnName){
									obj[o] = statusColumnValue;
								}

							}
							var table = uni.getStorageSync('crossTable');
							await this.$api.update(`${table}`, obj);
						} else {
						       crossuserid=Number(uni.getStorageSync('userid'));
						       crossrefid=obj['id'];
						       crossoptnum=uni.getStorageSync('statusColumnName');
						       crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
						}
					}
				}
				if(crossrefid && crossuserid) {
					this.ruleForm.crossuserid=crossuserid;
					this.ruleForm.crossrefid=crossrefid;
					let params = {
						page: 1,
						limit:10,
						crossuserid:crossuserid,
						crossrefid:crossrefid,
					}
					let res = await this.$api.list(`humianxinxi`, params);
					if (res.data.total >= crossoptnum) {
						this.$utils.msg(uni.getStorageSync('tips'));
						return false;
					} else {
                //跨表计算
						if(this.ruleForm.id){
							await this.$api.update(`humianxinxi`, this.ruleForm);
						}else{
							await this.$api.add(`humianxinxi`, this.ruleForm);
						}
						this.$utils.msgBack('提交成功');
					}
				} else {
                //跨表计算
					if(this.ruleForm.id){
						await this.$api.update(`humianxinxi`, this.ruleForm);
					}else{
						await this.$api.add(`humianxinxi`, this.ruleForm);
					}
					this.$utils.msgBack('提交成功');
				}
			},
			optionsChange(e) {
				this.index = e.target.value
			},
			bindDateChange(e) {
				this.date = e.target.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			toggleTab(str) {
				this.$refs[str].show();
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		padding: 20upx;
	}
	
	.content:after {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		content: '';
		background-attachment: fixed;
		background-size: cover;
		background-position: center;
	}

	textarea {
		border: 1upx solid #EEEEEE;
		border-radius: 20upx;
		padding: 20upx;
	}

	.title {
		width: 180upx;
	}

	.avator {
		width: 150upx;
		height: 60upx;
	}

	.right-input {
		flex: 1;
		text-align: left;
		padding: 0 24upx;
	}
	
	.cu-form-group.active {
		justify-content: space-between;
	}
	
	.btn {
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  flex-wrap: wrap;
	  padding: 20upx 0;
	}
	
	.cu-form-group {
		padding: 0 24upx;
		background-color: transparent;
		min-height: inherit;
	}
	
	.cu-form-group+.cu-form-group {
		border: 0;
	}
	
	.cu-form-group uni-input {
		padding: 0 30upx;
	}
	
	.uni-input {
		padding: 0 30upx;
	}
	
	.cu-form-group uni-textarea {
		padding: 30upx;
		margin: 0;
	}
	
	.cu-form-group uni-picker::after {
		line-height: 80rpx;
	}
	
	.select .uni-input {
		line-height: 80rpx;
	}
	
	.input .right-input {
		line-height: 80rpx;
	}
</style>
