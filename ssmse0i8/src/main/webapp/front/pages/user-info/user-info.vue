<template>
<view class="content">
	<view class="box" :style='{"padding":"0 24rpx","boxShadow":"0 0 12rpx rgba(0,0,0,0)","margin":"24rpx 0","borderColor":"rgba(0,0,0,0)","backgroundColor":"#fff","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"auto"}'>
		<view :style='{"boxShadow":"0 0 0px rgba(0,0,0,.3)","padding":"0 20rpx 0 0","backgroundColor":"rgba(1, 157, 214, 0.1)","borderColor":"rgba(245, 245, 245, 1)","margin":"0 0 2rpx 0","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"108rpx"}' v-if="tableName=='yonghu'" class="cu-form-group">
			<view class="title" :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(0,0,0,0)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(153, 153, 153, 1)","textAlign":"center","borderRadius":"0","borderWidth":"0","width":"120rpx","fontSize":"24rpx","lineHeight":"88rpx","borderStyle":"solid"}'>用户账号</view>
			<input disabled="true"  style="padding: 0 30upx" :style='{"padding":"0 20rpx","boxShadow":"0 0 12rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(68, 68, 68, 1)","backgroundColor":"rgba(0,0,0,0)","color":"rgba(9, 9, 9, 1)","borderRadius":"0 20rpx","borderWidth":"2rpx","width":"100%","lineHeight":"88rpx","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}' v-model="ruleForm.yonghuzhanghao" placeholder="用户账号"></input>
		</view>
		<view :style='{"boxShadow":"0 0 0px rgba(0,0,0,.3)","padding":"0 20rpx 0 0","backgroundColor":"rgba(1, 157, 214, 0.1)","borderColor":"rgba(245, 245, 245, 1)","margin":"0 0 2rpx 0","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"108rpx"}' v-if="tableName=='yonghu'" class="cu-form-group">
			<view class="title" :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(0,0,0,0)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(153, 153, 153, 1)","textAlign":"center","borderRadius":"0","borderWidth":"0","width":"120rpx","fontSize":"24rpx","lineHeight":"88rpx","borderStyle":"solid"}'>用户姓名</view>
			<input   style="padding: 0 30upx" :style='{"padding":"0 20rpx","boxShadow":"0 0 12rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(68, 68, 68, 1)","backgroundColor":"rgba(0,0,0,0)","color":"rgba(9, 9, 9, 1)","borderRadius":"0 20rpx","borderWidth":"2rpx","width":"100%","lineHeight":"88rpx","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}' v-model="ruleForm.yonghuxingming" placeholder="用户姓名"></input>
		</view>
		<view :style='{"boxShadow":"0 0 0px rgba(0,0,0,.3)","padding":"0 20rpx 0 0","backgroundColor":"rgba(1, 157, 214, 0.1)","borderColor":"rgba(245, 245, 245, 1)","margin":"0 0 2rpx 0","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"108rpx"}' v-if="tableName=='yonghu'" class="cu-form-group">
			<view class="title" :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(0,0,0,0)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(153, 153, 153, 1)","textAlign":"center","borderRadius":"0","borderWidth":"0","width":"120rpx","fontSize":"24rpx","lineHeight":"88rpx","borderStyle":"solid"}'>密码</view>
			<input  type="password" style="padding: 0 30upx" :style='{"padding":"0 20rpx","boxShadow":"0 0 12rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(68, 68, 68, 1)","backgroundColor":"rgba(0,0,0,0)","color":"rgba(9, 9, 9, 1)","borderRadius":"0 20rpx","borderWidth":"2rpx","width":"100%","lineHeight":"88rpx","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}' v-model="ruleForm.mima" placeholder="密码"></input>
		</view>
		<view :style='{"boxShadow":"0 0 0px rgba(0,0,0,.3)","padding":"0 20rpx 0 0","backgroundColor":"rgba(1, 157, 214, 0.1)","borderColor":"rgba(245, 245, 245, 1)","margin":"0 0 2rpx 0","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"108rpx"}' v-if="tableName=='yonghu'" class="cu-form-group">
			<view class="title" :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(0,0,0,0)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(153, 153, 153, 1)","textAlign":"center","borderRadius":"0","borderWidth":"0","width":"120rpx","fontSize":"24rpx","lineHeight":"88rpx","borderStyle":"solid"}'>用户手机</view>
			<input   style="padding: 0 30upx" :style='{"padding":"0 20rpx","boxShadow":"0 0 12rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(68, 68, 68, 1)","backgroundColor":"rgba(0,0,0,0)","color":"rgba(9, 9, 9, 1)","borderRadius":"0 20rpx","borderWidth":"2rpx","width":"100%","lineHeight":"88rpx","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}' v-model="ruleForm.yonghushouji" placeholder="用户手机"></input>
		</view>
		<view :style='{"boxShadow":"0 0 0px rgba(0,0,0,.3)","padding":"0 20rpx 0 0","backgroundColor":"rgba(1, 157, 214, 0.1)","borderColor":"rgba(245, 245, 245, 1)","margin":"0 0 2rpx 0","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"108rpx"}' v-if="tableName=='yonghu'" class="cu-form-group">
			<view class="title" :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(0,0,0,0)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(153, 153, 153, 1)","textAlign":"center","borderRadius":"0","borderWidth":"0","width":"120rpx","fontSize":"24rpx","lineHeight":"88rpx","borderStyle":"solid"}'>邮箱</view>
			<input   style="padding: 0 30upx" :style='{"padding":"0 20rpx","boxShadow":"0 0 12rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(68, 68, 68, 1)","backgroundColor":"rgba(0,0,0,0)","color":"rgba(9, 9, 9, 1)","borderRadius":"0 20rpx","borderWidth":"2rpx","width":"100%","lineHeight":"88rpx","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}' v-model="ruleForm.youxiang" placeholder="邮箱"></input>
		</view>
			<view v-if="tableName=='yonghu'" :style='{"boxShadow":"0 0 0px rgba(0,0,0,.3)","padding":"0 20rpx 0 0","backgroundColor":"rgba(1, 157, 214, 0.1)","borderColor":"rgba(245, 245, 245, 1)","margin":"0 0 2rpx 0","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"108rpx"}' class="cu-form-group select">
                                <view :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(0,0,0,0)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(153, 153, 153, 1)","textAlign":"center","borderRadius":"0","borderWidth":"0","width":"120rpx","fontSize":"24rpx","lineHeight":"88rpx","borderStyle":"solid"}' class="title">性别</view>
                                <picker  @change="yonghuxingbieChange" :value="yonghuxingbieIndex" :range="yonghuxingbieOptions">
                                        <view style="padding: 0 30upx" :style='{"boxShadow":"0 0 0px rgba(0,0,0,.6) inset","padding":"0 20rpx","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(0, 0, 0, 0.6)","margin":"0","color":"rgba(51, 51, 51, 1)","textAlign":"left","borderRadius":"0 20rpx","borderWidth":"2rpx","width":"100%","fontSize":"24rpx","borderStyle":"solid","height":"80rpx"}' class="uni-input picker-select-input">{{ruleForm.xingbie?ruleForm.xingbie:"请选择性别"}}</view>
                                </picker>
                        </view>
		<view :style='{"boxShadow":"0 0 0px rgba(0,0,0,.3)","padding":"0 20rpx 0 0","backgroundColor":"rgba(1, 157, 214, 0.1)","borderColor":"rgba(245, 245, 245, 1)","margin":"0 0 2rpx 0","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"108rpx"}' v-if="tableName=='yonghu'" @tap="yonghutouxiangTap" class="cu-form-group">
			<view class="title" :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(0,0,0,0)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(153, 153, 153, 1)","textAlign":"center","borderRadius":"0","borderWidth":"0","width":"120rpx","fontSize":"24rpx","lineHeight":"88rpx","borderStyle":"solid"}'>头像</view>
			<view style="flex: 1;">
				<image :style='{"boxShadow":"0 0 8rpx rgba(0,0,0,.3)","padding":"0","borderColor":"rgba(0,0,0,0)","margin":"0","backgroundColor":"rgba(255, 255, 255, 0)","borderRadius":"50%","textAlign":"left","borderWidth":"0","width":"80rpx","borderStyle":"solid","height":"80rpx"}' v-if="ruleForm.touxiang" style="margin: 0;" class="avator" :src="baseUrl+ruleForm.touxiang" mode=""></image>
				<image :style='{"boxShadow":"0 0 8rpx rgba(0,0,0,.3)","padding":"0","borderColor":"rgba(0,0,0,0)","margin":"0","backgroundColor":"rgba(255, 255, 255, 0)","borderRadius":"50%","textAlign":"left","borderWidth":"0","width":"80rpx","borderStyle":"solid","height":"80rpx"}' v-else class="avator" style="margin: 0;" src="../../static/center/face.jpeg" mode=""></image>
			</view>
		</view>
		
		<view class="btn">
			<button @tap="update()" class="cu-btn lg" :style='{"boxShadow":"0 0 0px rgba(0,0,0,0) inset","padding":"0 30rpx","backgroundColor":"rgba(1, 157, 214, 1)","borderColor":"#409EFF","margin":"0","borderRadius":"0 0 20rpx 20rpx","color":"#fff","borderWidth":"0","width":"48%","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}'>保存</button>
			<button @tap="logout()" class="cu-btn lg" :style='{"boxShadow":"0 0 0px rgba(0,0,0,0) inset","padding":"0 30rpx","backgroundColor":"rgba(224, 69, 67, 1)","borderColor":"rgba(51, 51, 51, 0.17)","margin":"0","borderRadius":"0 0 20rpx 20rpx","color":"rgba(255, 255, 255, 1)","borderWidth":"2rpx","width":"48%","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}'>退出登录</button>
		</view>
	</view>
</view>
</template>

<script>
	export default {
		data() {
			return {
				ruleForm: {
				},
				tableName:"",
				yonghuxingbieOptions: [],
				yonghuxingbieIndex: 0,
			}
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			}
		},
		async onLoad() {
			let table = uni.getStorageSync("nowTable");
			let res = await this.$api.session(table);
			this.ruleForm = res.data;
			this.tableName = table;
			// 自定义下拉框值
			if(this.tableName=='yonghu'){
				this.yonghuxingbieOptions = "男,女".split(',');
				this.yonghuxingbieOptions.forEach((item, index) => {
					if(item==this.ruleForm.xingbie) {
						this.yonghuxingbieIndex = index;
					}
				});
			}
			this.styleChange()
		},
		methods: {
                        // 下拉变化
                        yonghuxingbieChange(e) {
                                this.yonghuxingbieIndex = e.target.value
                                this.ruleForm.xingbie = this.yonghuxingbieOptions[this.yonghuxingbieIndex]
                        },
			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.cu-form-group .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.userInfoForm.list.input.backgroundColor
					// })
				})
			},
			// 获取uuid
			getUUID () {
				return new Date().getTime();
			},
			logout() {
				uni.setStorageSync('token', '');
				this.$utils.jump('../login/login');
			},
			// 注册
			async update() {
				if((!this.ruleForm.yonghuzhanghao) && `yonghu` == this.tableName){
					this.$utils.msg(`用户账号不能为空`);
					return
				}
				if((!this.ruleForm.yonghuxingming) && `yonghu` == this.tableName){
					this.$utils.msg(`用户姓名不能为空`);
					return
				}
				if((!this.ruleForm.mima) && `yonghu` == this.tableName){
					this.$utils.msg(`密码不能为空`);
					return
				}
				if(`yonghu` == this.tableName && this.ruleForm.yonghushouji&&(!this.$validate.isMobile(this.ruleForm.yonghushouji))){
					this.$utils.msg(`用户手机应输入手机格式`);
					return
				}
				let table = uni.getStorageSync("nowTable");
				await this.$api.update(table, this.ruleForm);
				this.$utils.msgBack('修改成功');;
			}

			,yonghutouxiangTap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.touxiang = 'upload/' + res.file;
					_this.$forceUpdate();
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #fff;
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

	.avator {
		width: 110upx;
		height: 110upx;
		border-radius: 50%;
		margin-left: 30upx;
	}
	
	.cu-form-group.active {
		justify-content: space-between;
	}

	.cu-btn {
		width: 100%;
	}
	.cu-form-group .title {
		height: auto;
	}

	.right-input {
		flex: 1;
		text-align: left;
		line-height: 80rpx;
	}
	.btn {
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  flex-wrap: wrap;
	}
	.box {
	  width: auto;
	  padding: 0 10upx;
	  box-sizing: border-box;
	  margin-bottom: 20upx;
	}

.picker-select-input {
	line-height: 80rpx;
}
</style>
